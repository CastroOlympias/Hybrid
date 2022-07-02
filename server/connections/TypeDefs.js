const { gql } = require('apollo-server-express');

const typeDefs = gql`
type UserModel {
    createdAt: String
    _id: ID
    userName: String
    eMail: String
    birthDate: String
    password: String
    aboutMe: String
    findMeFriend: String
    userMacroDashboard: MacroDashboardModel
    userPantry: [PantryModel]
    userMeals: [MealsModel]
    userComments: [CommentsModel]
    friends: [UserModel]
    blocked: [UserModel]
}

type MacroDashboardModel {
    macroDashboardUserId: ID
    macroDashboardUserName: String
    createdAt: String
    sealsTaxRate: Float
    monthDays: Int
    dailyCost: Float
    monthlyCost: Float
    dailyMealOunces: Int
    dailyCalories: Int
    macroProteinsRatio: Int
    macroFatsRatio: Int
    macroCarbsRatio: Int
    suggestedProtensGrams: Int
    suggestedFatsGrams: Int
    suggestedCarbsGrams: Int
    actualProteinsGrams: Int
    actualFatsGrams: Int
    actualCarbsGrams: Int
    selectedMeals: [MealsModel]
}

type CommentsModel {
    threadId: ID
    commentUserId: ID
    commentUserName: String
    createdAt: String
    _id: ID
    commentText: String
    userReplies: [RepliesModel]
    userRepliesSchema: [RepliesSchema]
}

type RepliesModel {
    threadId: ID
    commentId: ID
    commentUserId: ID
    replyUserId: ID
    createdAt: String
    _id: ID
    replyUserName: String
    replyText: String
}

type RepliesSchema {
    commentUserId: ID
    replyUserId: ID
    replyUserName: String
    createdAt: String
    _id: ID
    replyText: String
}

type PantryModel {
    pantryUserId: ID
    pantryUserName: String
    createdAt: String
    _id: ID
    pantryType: String
    pantryNotes: String
    pantryItems: [PantryItemsModel]
    pantryCommentThread: [CommentsModel]
}

type PantryItemsModel {
    pantryId: ID
    pantryItemUserId: ID
    createdAt: String
    _id: ID
    pantryItemStore: String
    pantryItemBrand: String
    pantryItemName: String
    pantryItemPackageDescription: String
    pantryItemPackageCost: Float
    pantryItemPackageQuantity: Int
    pantryItemPackageGrossWeightOunces: Int
    pantryItemPackageNetWeightOunces: Int
    pantryItemPackageServingsQuantity: Int
    pantryItemCostPerGrossWeightOunces: Float
    pantryItemCostPerNetWeightOunces: Float
    pantryItemProteinsPerServingGrams: Int
    pantryItemFatsPerServingGrams: Int
    pantryItemCarbsPerServingGrams: Int
    pantryItemNotes: String
}

type MealsModel {
    mealUserId: ID
    mealUserName: String
    createdAt: String
    _id: ID
    mealName: String
    mealQuantity: Int
    mealCost: Float
    mealNotes: String
    mealItems: [MealItemsModel]
    mealCommentThread: [CommentsModel]
}

type MealItemsModel {
    mealId: ID
    mealItemUserId: ID
    createdAt: String
    _id: ID
    mealItemStore: String
    mealItemBrand: String
    mealItemName: String
    mealItemDescription: String
    mealItemCost: Float
    mealItemQuantity: Int
    mealItemGrossWeightOunces: Int
    mealItemNetWeightOunces: Int
    mealItemServingsQuantity: Int
    mealItemCostPerGrossWeightOunces: Float
    mealItemCostPerNetWeightOunces: Float
    mealItemProteinsGrams: Int
    mealItemFatsGrams: Int
    mealItemCarbsGrams: Int
    mealItemNotes: String
}

type Auth {
    token: ID
    user: UserModel
}

type Pizza {
    pizzaName: String
}

type Mutation {
    ########## User Mutations
    createAUser(userName: String, eMail: String, birthDate: String, password: String): Auth
    
    loginToAUser(eMail: String, password: String): Auth
    
    editAUser(userName: String, eMail: String, birthDate: String, password: String, aboutMe: String, findMeFriend: String): UserModel
    
    changeAUsereMailOrPassword(userName: String, eMail: String, birthDate: String, password: String): Auth
    
    deleteAUser(userId: ID): UserModel

    friendAUser(friendId: ID): UserModel

    blockAUser(blockedId: ID): UserModel



    ########## Comment Mutations
    createACommentThread(threadType: String, threadId: ID, commentUserId: ID, commentUserName: String, commentText: String): CommentsModel

    editAComment(commentId: ID, commentUserId: ID, commentText: String): CommentsModel
    
    deleteAllCommentsAndAllUserReplies: CommentsModel
    
    deleteACommentAndAllUserReplies(commentId: ID, commentUserId: ID): CommentsModel

    ########## This is the userRepliesSchema to keep practicing, edit and delete of those replies
    createAReplyToAComment(commentId: ID, replyUserId: ID, replyUserName: String, replyText: String): CommentsModel

    editAReplyToAComment(commentId: ID, replyId: ID, replyUserId: ID, replyText: String): CommentsModel



    ########## Reply Mutations
    createAReply(threadId: ID, commentId: ID, commentUserId: ID, replyUserId: ID, replyUserName: String, replyText: String): RepliesModel
    
    editAReply(replyId: ID, replyUserId: ID, replyText: String): RepliesModel
    
    deleteAllReplies(replyUserId: ID): RepliesModel
    
    deleteAReply(replyId: ID, replyUserId: ID): RepliesModel



    ########## Pantry Mutations
    createAPantry(pantryUserId: ID, pantryUserName: String, pantryType: String, pantryNotes: String): PantryModel
    
    editAPantry(pantryId: ID, pantryUserId: ID, pantryType: String, pantryNotes: String): PantryModel
    
    deleteAllPantriesAndAllPantryItems: PantryModel
    
    deleteAPantryAndAllPantryItems(pantryId: ID, pantryUserId: ID): PantryModel



    ########## Pantry Item Mutations
    createAPantryItem(pantryId: ID, pantryItemUserId: ID, pantryItemStore: String, pantryItemBrand: String, pantryItemName: String, pantryItemPackageDescription: String, pantryItemPackageCost: Float, pantryItemPackageQuantity: Int, pantryItemPackageGrossWeightOunces: Int, pantryItemPackageNetWeightOunces: Int, pantryItemPackageServingsQuantity: Int, pantryItemCostPerGrossWeightOunces: Float, pantryItemCostPerNetWeightOunces: Float, pantryItemProteinsPerServingGrams: Int, pantryItemFatsPerServingGrams: Int, pantryItemCarbsPerServingGrams: Int, pantryItemNotes: String): PantryItemsModel
    
    editAPantryItem(pantryItemId: ID, pantryItemUserId: ID, pantryItemStore: String, pantryItemBrand: String, pantryItemName: String, pantryItemPackageDescription: String, pantryItemPackageCost: Float, pantryItemPackageQuantity: Int, pantryItemPackageGrossWeightOunces: Int, pantryItemPackageNetWeightOunces: Int, pantryItemPackageServingsQuantity: Int, pantryItemCostPerGrossWeightOunces: Float, pantryItemCostPerNetWeightOunces: Float, pantryItemProteinsPerServingGrams: Int, pantryItemFatsPerServingGrams: Int, pantryItemCarbsPerServingGrams: Int, pantryItemNotes: String): PantryItemsModel
    
    movePantryItemToAnotherPantry(pantryItemId: ID, previousPantryId: ID, pantryId: ID, pantryItemUserId: ID): PantryItemsModel

    deleteAPantryItem(pantryItemId: ID, pantryItemUserId: ID): PantryItemsModel



    ########## Meal Mutations
    createAMeal(mealUserId: ID, mealUserName: String, mealName: String, mealQuantity: Int, mealCost: Float, mealNotes: String): MealsModel
    
    editAMeal(mealId: ID, mealUserId: ID, mealName: String mealQuantity: Int, mealCost: Float, mealNotes: String): MealsModel

    deleteAllMealsAndAllMealItems: MealsModel
    
    deleteAMealAndAllMealItems(mealId: ID, mealUserId: ID): MealsModel



    ########## Meal Items Mutations
    createAMealItem(mealId: ID, mealItemUserId: ID, mealItemStore: String, mealItemBrand: String, mealItemName: String, mealItemDescription: String, mealItemCost: Float, mealItemQuantity: Int, mealItemGrossWeightOunces: Int, mealItemNetWeightOunces: Int, mealItemServingsQuantity: Int, mealItemCostPerGrossWeightOunces: Float, mealItemCostPerNetWeightOunces: Float, mealItemProteinsGrams: Int, mealItemFatsGrams: Int, mealItemCarbsGrams: Int, mealItemNotes: String): MealItemsModel

    editAMealItem(mealItemId: ID, mealItemUserId: ID, mealItemStore: String, mealItemBrand: String, mealItemName: String, mealItemDescription: String, mealItemCost: Float, mealItemQuantity: Int, mealItemGrossWeightOunces: Int, mealItemNetWeightOunces: Int, mealItemServingsQuantity: Int, mealItemCostPerGrossWeightOunces: Float, mealItemCostPerNetWeightOunces: Float, mealItemProteinsGrams: Int, mealItemFatsGrams: Int, mealItemCarbsGrams: Int, mealItemNotes: String): MealItemsModel

    deleteAMealItem(mealItemId: ID, mealItemUserId: ID): MealItemsModel
}

type Query {
    ########## User Queries
    findMe: UserModel
    
    findAllUsers: [UserModel]
    
    findAllUsersBySameName(userName: String): [UserModel]
    
    findAllUsersBySecretCode(findMeFriend: String): [UserModel]
    
    findAUserById(userId: ID): UserModel
    
    findAUserByEmail(eMail: String): UserModel



    ########## Comment Queries
    viewAllMyComments: [CommentsModel]

    viewAllComments: [CommentsModel]
    
    viewASingleCommentById(commentId: ID): CommentsModel
    


    ########## Reply Queries
    viewAllReplies: [RepliesModel]
    
    viewASingleReplyById(replyId: ID): RepliesModel



    ########## Pantry Queries
    viewAllMyPantries: [PantryModel]

    viewAllPantries: [PantryModel]
    
    viewAllPantriesByCategory: [PantryModel]
    
    viewASinglePantryById(pantryId: ID): PantryModel



    ######### Pantry Items Queries
    veiwAllMyPantryItems: [PantryItemsModel]

    viewAllPantryItems: [PantryItemsModel]
    


    ########## Meal Queries
    viewAllMeals: [MealsModel]

    viewAllMyMeals: [MealsModel]
    
    viewAllMealsBySameName(mealName: String): [MealsModel]
    
    viewASingleMealById(mealId: ID): MealsModel



    ########## Meal Items Queries
    viewAllMyMealItems: [MealItemsModel]

    viewAllMealItems: [MealItemsModel]

    findAllPizzas: [Pizza]
}
`
module.exports = typeDefs;