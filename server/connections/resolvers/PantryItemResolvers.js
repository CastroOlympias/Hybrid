const { UserModel, PantryModel, PantryItemsModel, CommentsModel, RepliesModel } = require("../../collections")
const { AuthenticationError } = require('apollo-server-express');

const pantryItemResolvers = {
    // Mutations
    createAPantryItem: async (parent, args, context) => {
        if (context.user) {
            const pantryItem = await PantryItemsModel.create({ ...args, pantryItemUserId: context.user._id })
            await PantryModel.findByIdAndUpdate(
                { _id: args.pantryId },
                { $push: { pantryItems: pantryItem } },
                { new: true },
            )
            return pantryItem;
        }
        throw new AuthenticationError('You cannot create a pantry item or add it to a pantry');
    },
    editAPantryItem: async (parent, args, context) => {
        if (args.pantryItemUserId == context.user._id) {
            const updatePantryItem = await PantryItemsModel.findOneAndUpdate(
                { _id: args.pantryItemId },
                args,
                { new: true },
            );
            return updatePantryItem
        }
        throw new AuthenticationError("You cannot edit another user's pantry item")
    },
    movePantryItemToAnotherPantry: async (parent, args, context) => {
        if (args.pantryItemUserId == context.user._id) {
            const movePantryItem = await PantryItemsModel.findOneAndUpdate(
                { _id: args.pantryItemId },
                args,
                { new: true },
            );
            await PantryModel.findByIdAndUpdate(
                { _id: args.previousPantryId },
                { $pull: { pantryItems: args.pantryItemId } },
                { new: true },
            )
            await PantryModel.findByIdAndUpdate(
                { _id: args.pantryId },
                { $pull: { pantryItems: args.pantryItemId } },
                { new: true },
            )
            await PantryModel.findByIdAndUpdate(
                { _id: args.pantryId },
                { $push: { pantryItems: args.pantryItemId } },
                { new: true },
            )
            return movePantryItem
        }
        throw new AuthenticationError("You cannot move another user's pantry")
    },
    deleteAPantryItem: async (parent, args, context) => {
        if (args.pantryItemUserId == context.user._id) {
            const deletePantryItem = await PantryItemsModel.findOneAndDelete({
                _id: args.pantryItemId
            })
            await PantryModel.findByIdAndUpdate(
                { _id: args.pantryItemId },
                { $pull: { pantryItems: deletePantryItem.pantryItemId } },
                { new: true }
            )
            return deletePantryItem;
        }
        throw new AuthenticationError("You cannot delete another user's pantry item")
    },
    // Queries
    veiwAllMyPantryItems: async (parent, args, context) => {
        if (context.user) {
            return PantryItemsModel.find()
        }
        throw new AuthenticationError("Can't get my pantry items");
    },
    viewAllPantryItems: async (parent) => {
        return PantryItemsModel.find().sort({ pantryItemName: 'desc' })
    },
}

module.exports = pantryItemResolvers;