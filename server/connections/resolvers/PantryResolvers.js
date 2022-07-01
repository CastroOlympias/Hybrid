const { UserModel, PantryModel, PantryItemsModel, CommentsModel, RepliesModel } = require("../../collections")
const { AuthenticationError } = require('apollo-server-express');

const pantryResolvers = {
    // Mutations
    createAPantry: async (parent, args, context) => {
        if (context.user) {
            const singleItem = await PantryModel.create({ ...args, pantryUserId: context.user._id, pantryUserName: context.user.userName })
            await UserModel.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { userPantry: singleItem } },
                { new: true }
            )
            return singleItem;
        }
        throw new AuthenticationError("You Must be logged in to create a pantry item");
    },
    editAPantry: async (parent, args, context) => {
        if (args.pantryUserId == context.user._id) {
            const updatePantry = await PantryModel.findOneAndUpdate(
                { _id: args.pantryId },
                args,
                { new: true },
            );
            return updatePantry;
        }
        throw new AuthenticationError("You cannot edit another user's pantry item");
    },
    deleteAllPantriesAndAllPantryItems: async (parent, args, context) => {
        if (context.user._id) {
            const pantry = await PantryModel.deleteMany({
                pantryUserId: context.user._id
            });
            await PantryItemsModel.deleteMany({
                pantryItemUserId: context.user._id
            });
            await UserModel.findByIdAndUpdate(
                { _id: context.user._id },
                { $pull: { userPantry: pantry.pantryUserId } },
                { new: true }
            );
            return pantry;
        }
        throw new AuthenticationError("You cannot delete another user's pantry and pantry items")
    },
    deleteAPantryAndAllPantryItems: async (parent, args, context) => {
        if (args.pantryUserId == context.user._id) {
            const deletePantryItem = await PantryModel.findOneAndDelete({
                _id: args.pantryId
            });
            await PantryItemsModel.deleteMany({
                pantryId: args.pantryId
            })
            await CommentsModel.deleteMany({
                threadId: args.pantryId
            });
            await RepliesModel.deleteMany({
                threadId: args.pantryId
            });
            await UserModel.findByIdAndUpdate(
                { _id: context.user._id },
                { $pull: { userPantry: deletePantryItem.pantryId } },
                { new: true }
            )
            return deletePantryItem
        }
        throw new AuthenticationError("You cannot delete another user's pantry item");
    },

    // Queries
    viewAllMyPantries: async (parent, args, context) => {
        if (context.user) {
            return PantryModel.find({ pantryUserId: context.user._id }).sort({ pantryType: 'asc' })
                .populate('pantryItems')
                .populate('pantryCommentThread')
        }
        throw new AuthenticationError("Can't get my pantries");
    },
    viewAllPantries: async (parent) => {
        return PantryModel.find().sort({ itemCategory: 'asc', itemName: 'asc' })
            .populate('pantryItems')
            .populate('pantryCommentThread')
    },
    viewAllPantriesByCategory: async (parent, { itemCategory }) => {
        return PantryModel.find({ itemCategory }).sort({ itemName: 'asc' })
            .populate('pantryItems')
            .populate('pantryCommentThread')
    },
    viewASinglePantryById: async (parent, { pantryId }) => {
        return PantryModel.findOne({ pantryId })
            .populate('pantryItems')
            .populate('pantryCommentThread')
    },
}
module.exports = pantryResolvers;