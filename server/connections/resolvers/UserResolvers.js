const { UserModel, CommentsModel, RepliesModel, PantryModel, MealsModel, PantryItemsModel, MealItemsModel } = require('../../collections');
const { signToken } = require('../../configuration/Authentication')
const bcrypt = require('bcrypt');
const { AuthenticationError } = require('apollo-server-express');

const userResolvers = {
    // Mutations
    createAUser: async (parent, args) => {
        const user = await UserModel.create(args);
        const token = signToken(user);
        return { token, user };
    },
    loginToAUser: async (parent, { eMail, password }) => {
        const user = await UserModel.findOne({ eMail });
        if (!user) {
            throw new AuthenticationError('Invalid credentials');
        }
        const correctPassword = await user.isCorrectPassword(password);
        if (!correctPassword) {
            throw new AuthenticationError('Invalid credentials');
        }
        const token = signToken(user);
        return { token, user };
    },
    // Trying to get this to work, it seems the new password is being hashed, but it appears it that the token isn't being saved with a new password, which breaks login due to old token and new password, I haven't tried manually deleting my token in dev tools, to see if I can then create a new token with the new password. I'm taking a break!
    changeAUsereMailOrPassword: async (parent, args, context) => {
        if (context.user) {
            const user = await UserModel.findOneAndUpdate(
                { _id: context.user._id },
                args,
                { new: true });
            const saltRounds = 10;
            user.password = await bcrypt.hash(user.password, saltRounds);
            const token = signToken(user);

            return { token, user };
        }
    },
    editAUser: async (parent, args, context) => {
        if (context.user) {
            const user = await UserModel.findOneAndUpdate(
                { _id: context.user._id },
                args,
                { new: true });
            return user;
        }
        throw new AuthenticationError('You must be logged in to edit your profile');
    },
    deleteAUser: async (parent, { userId }, context) => {
        if (context.user) {
            const user = await UserModel.findOneAndDelete({
                _id: userId
            })
            await CommentsModel.deleteMany({
                commentUserId: context.user._id
            });
            await RepliesModel.deleteMany({
                replyUserId: context.user._id
            });
            await PantryModel.deleteMany({
                pantryUserId: context.user._id
            });
            await PantryItemsModel.deleteMany({
                pantryItemUserId: context.user._id
            })
            await MealsModel.deleteMany({
                mealUserId: context.user._id
            })
            await MealItemsModel.deleteMany({
                mealItemsUserId: context.user._id
            })
            return user;
        }
        throw new AuthenticationError('You must be logged in to delete your profile')
    },
    friendAUser: async (parent, args, context) => {
        if (context.user._id) {
            const addFriend = await UserModel.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { friends: args.friendId } },
                { new: true }
            ).populate('friends');
            return addFriend;
        }
    },
    blockAUser: async (parent, args, context) => {
        if (context.user._id) {
            const blockFrenemy = await UserModel.findOneAndUpdate(
                { _id: context.user._id },
                { $addToSet: { blocked: args.blockedId } },
                { new: true }
            ).populate('blocked');
            return blockFrenemy
        }
    },

    // Queries
    findMe: async (parent, args, context) => {
        if (context.user) {
            const userData = await UserModel.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('userPantry')
                .populate('userMeals')
                .populate('userComments')
                .populate('friends')
                .populate('blocked')
            // console.log('line 107', userData.userPantry[0]._id)
            // console.log(userData.userPantry[1]._id)


            // const mealsStuff = MealsModel.find({ mealUserId: context.user._id }).sort({ mealName: 'asc' })
            // .populate('mealItems')
            // .populate('mealCommentThread')

            // const arrayA = userData.userPantry[0]._id
            // const arrayB = userData.userPantry[1]._id
            // console.log('line 95', mealsStuff)
            // console.log('line 96', arrayA)
            // console.log('line 97', arrayB)
            return userData;
        }
        throw new AuthenticationError('Not Logged In');
    },
    findAllUsers: async (parent, args, context) => {
        const allUserData = await UserModel.find()
            .select('-__v, -password')
            .populate('userPantry')
            .populate('userMeals')
            .populate('userComments')
            .populate('friends')
            .populate('blocked')

        // const excludeData = await UserModel.findOne({ _id: context.user._id })

        // console.log('line 135', allUserData)
        // console.log('line 136', excludeData)
        // console.log('line 137', excludeData.blocked)

// console.log('line 139', excludeData.blocked[0]._id)
        // const excludeUser = allUserData
        // for (var i = 0; i < allUserData.length; i++) {
        //     console.log('line 142', excludeUser[i]._id)
        //     console.log('line 143', excludeData.blocked[i])
          
        //     if (excludeData.blocked[i] == excludeUser[i]._id) {
        //         console.log('match')
        //     } else {
        //         console.log('no match')
        //     }

        //     if ("61d7a699e58aa41066b764bf" == excludeUser[i]._id) {
        //         console.log('match')
        //     } else {
        //         console.log('no match')
        //     }

        // }
     

        return allUserData
    },
    findAllUsersBySameName: async (parent, { userName }) => {
        return UserModel.find({ userName }).sort({ eMail: 'asc' })
            .select('-__v -password')
            .populate('userPantry')
            .populate('userMeals')
            .populate('userComments')
    },
    findAllUsersBySecretCode: async (parent, { findMeFriend }) => {
        return UserModel.find({ findMeFriend })
            .select('-__v -password')
            .populate('userPantry')
            .populate('userMeals')
            .populate('userComments')
    },
    findAUserById: async (parent, { userId }) => {
        return UserModel.findOne({ _id: userId })
            .select('-__v -password')
            .populate('userPantry')
            .populate('userMeals')
            .populate('userComments')
    },
    findAUserByEmail: async (parent, { eMail }) => {
        return UserModel.findOne({ eMail })
            .select('-__v -password')
            .populate('userPantry')
            .populate('userMeals')
            .populate('userComments')
    },
}
module.exports = userResolvers;