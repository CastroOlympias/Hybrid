// User Resolvers
const { createAUser, loginToAUser, editAUser, changeAUsereMailOrPassword, deleteAUser, friendAUser, blockAUser, findMe, findAllUsers, findAllUsersBySameName, findAllUsersBySecretCode, findAUserById, findAUserByEmail } = require('./resolvers/UserResolvers')

// Comments Resolvers
const { createACommentThread, editAComment, deleteAllCommentsAndAllUserReplies, deleteACommentAndAllUserReplies, viewAllMyComments, viewAllComments, viewASingleCommentById, createAReplyToAComment, editAReplyToAComment } = require('./resolvers/CommentResolvers')

// Reply Resolvers
const { createAReply, editAReply, deleteAllReplies, deleteAReply, viewAllReplies, viewASingleReplyById } = require('./resolvers/ReplyResolvers')

// Pantry Resolvers
const { createAPantry, editAPantry, deleteAllPantriesAndAllPantryItems, deleteAPantryAndAllPantryItems, viewAllPantries, viewAllMyPantries, viewAllPantriesByCategory, viewASinglePantryById } = require('./resolvers/PantryResolvers')

// Pantry Item Resolvers
const { createAPantryItem, editAPantryItem, movePantryItemToAnotherPantry, deleteAPantryItem, veiwAllMyPantryItems, viewAllPantryItems } = require('./resolvers/PantryItemResolvers')

// Meal Resolvers
const { createAMeal, editAMeal, deleteAllMealsAndAllMealItems, deleteAMealAndAllMealItems, viewAllMyMeals, viewAllMeals, viewAllMealsBySameName, viewASingleMealById } = require('./resolvers/MealResolvers')

// Meal Items Resolvers
const { createAMealItem, editAMealItem, deleteAMealItem, viewAllMyMealItems, viewAllMealItems } = require('./resolvers/MealItemsResolvers')

const { findAllPizzas } = require('./resolvers/PizzaResolver')

const resolvers = {
    Mutation: {
        // User Mutations
        createAUser,
        loginToAUser,
        editAUser,
        changeAUsereMailOrPassword,
        deleteAUser,
        friendAUser,
        blockAUser,

        // Comment Mutations
        createACommentThread,
        editAComment,
        deleteAllCommentsAndAllUserReplies,
        deleteACommentAndAllUserReplies,
        createAReplyToAComment,
        editAReplyToAComment,

        // Reply Mutations
        createAReply,
        editAReply,
        deleteAllReplies,
        deleteAReply,

        // Pantry Mutations
        createAPantry,
        editAPantry,
        deleteAllPantriesAndAllPantryItems,
        deleteAPantryAndAllPantryItems,

        // Pantry Item Mutations
        createAPantryItem,
        editAPantryItem,
        movePantryItemToAnotherPantry,
        deleteAPantryItem,

        // Meal Mutations
        createAMeal,
        editAMeal,
        deleteAllMealsAndAllMealItems,
        deleteAMealAndAllMealItems,

        // Meal Item Mutations
        createAMealItem,
        editAMealItem,
        deleteAMealItem,
    },
    Query: {
        // User Queries
        findMe,
        findAllUsers,
        findAllUsersBySameName,
        findAllUsersBySecretCode,
        findAUserById,
        findAUserByEmail,

        // Comment Queries
        viewAllMyComments,
        viewAllComments,
        viewASingleCommentById,

        // User Reply Queries
        viewAllReplies,
        viewASingleReplyById,

        // Pantry Queries
        viewAllMyPantries,
        viewAllPantries,
        viewAllPantriesByCategory,
        viewASinglePantryById,

        // Pantry Items Queries
        veiwAllMyPantryItems,
        viewAllPantryItems,

        // Meal Queries
        viewAllMyMeals,
        viewAllMeals,
        viewAllMealsBySameName,
        viewASingleMealById,

        // Meal Items Queries
        viewAllMyMealItems,
        viewAllMealItems,

        findAllPizzas
    },
}
module.exports = resolvers;