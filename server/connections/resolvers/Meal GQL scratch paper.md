<!-- *** Mutations *** -->
<!-- Create meal -->
mutation createAMeal(
  $mealUserId: ID
  $mealUserName: String
  $mealName: String
  $mealQuantity: Int
  $mealCost: Float
) {
  createAMeal(
    mealUserId: $mealUserId
    mealUserName: $mealUserName
    mealName: $mealName
    mealQuantity: $mealQuantity
    mealCost: $mealCost
  ) {
    mealUserId
    mealUserName
    createdAt
    _id
    mealName
    mealQuantity
  }
}

<!-- edit meal -->
mutation editAMeal(
  $mealId: ID
  $mealUserId: ID
  $mealName: String
  $mealQuantity: Int
  $mealCost: Float
) {
  editAMeal(
    mealId: $mealId
    mealUserId: $mealUserId
    mealName: $mealName
    mealQuantity: $mealQuantity
    mealCost: $mealCost
  ) {
    mealUserId
    mealUserName
    createdAt
    _id
    mealName
    mealQuantity
  }
}

<!-- edit meal arguments -->
{
  "mealId": "61a7f63ac5123baf99625fa7",
  "mealUserId": "61a7dfbd6aedb30b51a27f3e",
  "mealName": "Pizza",
  "mealQuantity": 2
}

<!-- Delete all meals and all meal items -->
mutation DeleteAllMealsAndAllMealItems {
  deleteAllMealsAndAllMealItems {
    mealUserId
    mealUserName
    createdAt
    _id
    mealName
    mealQuantity
    mealItems {
      mealId
      mealItemUserId
      createdAt
      _id
      mealItemName
      mealItemQuantity
    }
  }
}

<!-- delete meal -->
mutation DeleteAMealAndAllMealItems($mealId: ID, $mealUserId: ID) {
  deleteAMealAndAllMealItems(mealId: $mealId, mealUserId: $mealUserId) {
    mealUserId
    mealUserName
    createdAt
    _id
    mealName
    mealQuantity
  }
}


<!-- *** Queries *** -->
<!-- view all my meals -->
query viewAllMyMeals {
  viewAllMyMeals {
    mealUserId
    mealUserName
    createdAt
    _id
    mealName
    mealQuantity
    mealCost
    mealItems {
      mealId
      mealItemUserId
      createdAt
      _id
      mealItemName
      mealItemQuantity
    }
  }
}

<!-- Query all meals -->
query viewAllMeals {
  viewAllMeals {
    mealUserId
    mealUserName
    createdAt
    _id
    mealName
    mealQuantity
    mealCost
    mealItems {
      mealId
      mealItemUserId
      createdAt
      _id
      mealItemName
      mealItemQuantity
    }
  }
}


<!-- Query all meals items by same name -->
query viewAllMealsBySameName($mealName: String) {
  viewAllMealsBySameName(mealName: $mealName) {
    mealUserId
    mealUserName
    createdAt
    _id
    mealName
    mealQuantity
  }
}

<!-- Query single meal -->
query viewSingleMealById($mealId: ID) {
  viewSingleMealById(mealId: $mealId) {
    mealUserId
    mealUserName
    createdAt
    _id
    mealName
    mealQuantity
  }
}