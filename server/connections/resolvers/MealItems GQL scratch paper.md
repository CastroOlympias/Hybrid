<!-- *** Mutations *** -->
<!-- Create a Meal item -->
mutation CreateAMealItem(
  $mealId: ID
  $mealItemUserId: ID
  $mealItemStore: String
  $mealItemBrand: String
  $mealItemName: String
  $mealItemDescription: String
  $mealItemCost: Float
  $mealItemQuantity: Int
  $mealItemGrossWeightOunces: Int
  $mealItemNetWeightOunces: Int
  $mealItemServingsQuantity: Int
  $mealItemCostPerGrossWeightOunces: Float
  $mealItemCostPerNetWeightOunces: Float
  $mealItemProteinsGrams: Int
  $mealItemFatsGrams: Int
  $mealItemCarbsGrams: Int
  $mealItemNotes: String
) {
  createAMealItem(
    mealId: $mealId
    mealItemUserId: $mealItemUserId
    mealItemStore: $mealItemStore
    mealItemBrand: $mealItemBrand
    mealItemName: $mealItemName
    mealItemDescription: $mealItemDescription
    mealItemCost: $mealItemCost
    mealItemQuantity: $mealItemQuantity
    mealItemGrossWeightOunces: $mealItemGrossWeightOunces
    mealItemNetWeightOunces: $mealItemNetWeightOunces
    mealItemServingsQuantity: $mealItemServingsQuantity
    mealItemCostPerGrossWeightOunces: $mealItemCostPerGrossWeightOunces
    mealItemCostPerNetWeightOunces: $mealItemCostPerNetWeightOunces
    mealItemProteinsGrams: $mealItemProteinsGrams
    mealItemFatsGrams: $mealItemFatsGrams
    mealItemCarbsGrams: $mealItemCarbsGrams
    mealItemNotes: $mealItemNotes
  ) {
    mealId
    mealItemUserId
    createdAt
    _id
    mealItemStore
    mealItemBrand
    mealItemName
    mealItemDescription
    mealItemCost
    mealItemQuantity
    mealItemGrossWeightOunces
    mealItemNetWeightOunces
    mealItemServingsQuantity
    mealItemCostPerGrossWeightOunces
    mealItemCostPerNetWeightOunces
    mealItemProteinsGrams
    mealItemFatsGrams
    mealItemCarbsGrams
    mealItemNotes
  }
}

<!-- Edit a meal item -->
mutation EditAMealItem(
  $mealItemId: ID
  $mealItemUserId: ID
  $mealItemStore: String
  $mealItemBrand: String
  $mealItemName: String
  $mealItemDescription: String
  $mealItemCost: Float
  $mealItemQuantity: Int
  $mealItemGrossWeightOunces: Int
  $mealItemNetWeightOunces: Int
  $mealItemServingsQuantity: Int
  $mealItemCostPerGrossWeightOunces: Float
  $mealItemCostPerNetWeightOunces: Float
  $mealItemProteinsGrams: Int
  $mealItemFatsGrams: Int
  $mealItemCarbsGrams: Int
  $mealItemNotes: String
) {
  editAMealItem(
    mealItemId: $mealItemId
    mealItemUserId: $mealItemUserId
    mealItemStore: $mealItemStore
    mealItemBrand: $mealItemBrand
    mealItemName: $mealItemName
    mealItemDescription: $mealItemDescription
    mealItemCost: $mealItemCost
    mealItemQuantity: $mealItemQuantity
    mealItemGrossWeightOunces: $mealItemGrossWeightOunces
    mealItemNetWeightOunces: $mealItemNetWeightOunces
    mealItemServingsQuantity: $mealItemServingsQuantity
    mealItemCostPerGrossWeightOunces: $mealItemCostPerGrossWeightOunces
    mealItemCostPerNetWeightOunces: $mealItemCostPerNetWeightOunces
    mealItemProteinsGrams: $mealItemProteinsGrams
    mealItemFatsGrams: $mealItemFatsGrams
    mealItemCarbsGrams: $mealItemCarbsGrams
    mealItemNotes: $mealItemNotes
  ) {
    mealId
    mealItemUserId
    createdAt
    _id
    mealItemStore
    mealItemBrand
    mealItemName
    mealItemDescription
    mealItemCost
    mealItemQuantity
    mealItemGrossWeightOunces
    mealItemNetWeightOunces
    mealItemServingsQuantity
    mealItemCostPerGrossWeightOunces
    mealItemCostPerNetWeightOunces
    mealItemProteinsGrams
    mealItemFatsGrams
    mealItemCarbsGrams
    mealItemNotes
  }
}

<!-- Delete a meal item -->
mutation DeleteAMealItem(
  $deleteAMealItemMealItemId2: ID
  $deleteAMealItemMealItemUserId2: ID
) {
  deleteAMealItem(
    mealItemId: $deleteAMealItemMealItemId2
    mealItemUserId: $deleteAMealItemMealItemUserId2
  ) {
    mealId
    mealItemUserId
    createdAt
    _id
    mealItemName
    mealItemQuantity
  }
}

<!-- Queries -->
<!-- View all my meal items -->
query ViewAllMyMealItems {
  viewAllMyMealItems {
    mealId
    mealItemUserId
    createdAt
    _id
    mealItemStore
    mealItemBrand
    mealItemName
    mealItemDescription
    mealItemCost
    mealItemQuantity
    mealItemGrossWeightOunces
    mealItemNetWeightOunces
    mealItemServingsQuantity
    mealItemCostPerGrossWeightOunces
    mealItemCostPerNetWeightOunces
    mealItemProteinsGrams
    mealItemFatsGrams
    mealItemCarbsGrams
    mealItemNotes
  }
}

<!-- Query all meal items -->
query ViewAllMealItems {
  viewAllMealItems {
    mealId
    mealItemUserId
    createdAt
    _id
    mealItemStore
    mealItemBrand
    mealItemName
    mealItemDescription
    mealItemCost
    mealItemQuantity
    mealItemGrossWeightOunces
    mealItemNetWeightOunces
    mealItemServingsQuantity
    mealItemCostPerGrossWeightOunces
    mealItemCostPerNetWeightOunces
    mealItemProteinsGrams
    mealItemFatsGrams
    mealItemCarbsGrams
    mealItemNotes
  }
}