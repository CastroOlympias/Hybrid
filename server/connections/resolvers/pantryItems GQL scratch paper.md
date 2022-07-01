<!-- *** Mutations *** -->
<!-- Create a pantry item -->
mutation CreateAPantryItem(
  $pantryId: ID
  $pantryItemUserId: ID
  $pantryItemStore: String
  $pantryItemBrand: String
  $pantryItemName: String
  $pantryItemPackageDescription: String
  $pantryItemPackageCost: Float
  $pantryItemPackageQuantity: Int
  $pantryItemPackageGrossWeightOunces: Int
  $pantryItemPackageNetWeightOunces: Int
  $pantryItemPackageServingsQuantity: Int
  $pantryItemCostPerGrossWeightOunces: Float
  $pantryItemCostPerNetWeightOunces: Float
  $pantryItemProteinsPerServingGrams: Int
  $pantryItemFatsPerServingGrams: Int
  $pantryItemCarbsPerServingGrams: Int
  $pantryItemNotes: String
) {
  createAPantryItem(
    pantryId: $pantryId
    pantryItemUserId: $pantryItemUserId
    pantryItemStore: $pantryItemStore
    pantryItemBrand: $pantryItemBrand
    pantryItemName: $pantryItemName
    pantryItemPackageDescription: $pantryItemPackageDescription
    pantryItemPackageCost: $pantryItemPackageCost
    pantryItemPackageQuantity: $pantryItemPackageQuantity
    pantryItemPackageGrossWeightOunces: $pantryItemPackageGrossWeightOunces
    pantryItemPackageNetWeightOunces: $pantryItemPackageNetWeightOunces
    pantryItemPackageServingsQuantity: $pantryItemPackageServingsQuantity
    pantryItemCostPerGrossWeightOunces: $pantryItemCostPerGrossWeightOunces
    pantryItemCostPerNetWeightOunces: $pantryItemCostPerNetWeightOunces
    pantryItemProteinsPerServingGrams: $pantryItemProteinsPerServingGrams
    pantryItemFatsPerServingGrams: $pantryItemFatsPerServingGrams
    pantryItemCarbsPerServingGrams: $pantryItemCarbsPerServingGrams
    pantryItemNotes: $pantryItemNotes
  ) {
    pantryId
    pantryItemUserId
    createdAt
    _id
    pantryItemStore
    pantryItemBrand
    pantryItemName
    pantryItemPackageDescription
    pantryItemPackageCost
    pantryItemPackageQuantity
    pantryItemPackageGrossWeightOunces
    pantryItemPackageNetWeightOunces
    pantryItemPackageServingsQuantity
    pantryItemCostPerGrossWeightOunces
    pantryItemCostPerNetWeightOunces
    pantryItemProteinsPerServingGrams
    pantryItemFatsPerServingGrams
    pantryItemCarbsPerServingGrams
    pantryItemNotes
  }
}

<!-- Edit a pantry item -->
mutation EditAPantryItem(
  $pantryItemId: ID
  $pantryItemUserId: ID
  $pantryItemStore: String
  $pantryItemBrand: String
  $pantryItemName: String
  $pantryItemPackageDescription: String
  $pantryItemPackageCost: Float
  $pantryItemPackageQuantity: Int
  $pantryItemPackageGrossWeightOunces: Int
  $pantryItemPackageNetWeightOunces: Int
  $pantryItemPackageServingsQuantity: Int
  $pantryItemCostPerGrossWeightOunces: Float
  $pantryItemCostPerNetWeightOunces: Float
  $pantryItemProteinsPerServingGrams: Int
  $pantryItemFatsPerServingGrams: Int
  $pantryItemCarbsPerServingGrams: Int
  $pantryItemNotes: String
) {
  editAPantryItem(
    pantryItemId: $pantryItemId
    pantryItemUserId: $pantryItemUserId
    pantryItemStore: $pantryItemStore
    pantryItemBrand: $pantryItemBrand
    pantryItemName: $pantryItemName
    pantryItemPackageDescription: $pantryItemPackageDescription
    pantryItemPackageCost: $pantryItemPackageCost
    pantryItemPackageQuantity: $pantryItemPackageQuantity
    pantryItemPackageGrossWeightOunces: $pantryItemPackageGrossWeightOunces
    pantryItemPackageNetWeightOunces: $pantryItemPackageNetWeightOunces
    pantryItemPackageServingsQuantity: $pantryItemPackageServingsQuantity
    pantryItemCostPerGrossWeightOunces: $pantryItemCostPerGrossWeightOunces
    pantryItemCostPerNetWeightOunces: $pantryItemCostPerNetWeightOunces
    pantryItemProteinsPerServingGrams: $pantryItemProteinsPerServingGrams
    pantryItemFatsPerServingGrams: $pantryItemFatsPerServingGrams
    pantryItemCarbsPerServingGrams: $pantryItemCarbsPerServingGrams
    pantryItemNotes: $pantryItemNotes
  ) {
    pantryId
    pantryItemUserId
    createdAt
    _id
    pantryItemStore
    pantryItemBrand
    pantryItemName
    pantryItemPackageDescription
    pantryItemPackageCost
    pantryItemPackageQuantity
    pantryItemPackageGrossWeightOunces
    pantryItemPackageNetWeightOunces
    pantryItemPackageServingsQuantity
    pantryItemCostPerGrossWeightOunces
    pantryItemCostPerNetWeightOunces
    pantryItemProteinsPerServingGrams
    pantryItemFatsPerServingGrams
    pantryItemCarbsPerServingGrams
    pantryItemNotes
  }
}
<!-- Query variables -->
{
  "pantryItemId": "61cd2677390b9bb4ddecef14",
  "pantryItemUserId": "61bab6f6fe152dfe3f836c01",
  "pantryItemName": "Ketchup",
  "pantryItemQuantity": 2
}

<!-- Move a pantry item to another pantry -->
mutation MovePantryItemToAnotherPantry(
  $previousPantryId: ID
  $pantryId: ID
  $pantryItemId: ID
  $pantryItemUserId: ID
) {
  movePantryItemToAnotherPantry(
    previousPantryId: $previousPantryId
    pantryId: $pantryId
    pantryItemId: $pantryItemId
    pantryItemUserId: $pantryItemUserId
  ) {
    pantryId
    pantryItemUserId
    createdAt
    _id
    pantryItemName
    pantryItemQuantity
  }
}
<!-- Query Varaibles -->
{
  "pantryItemId": "61cd2677390b9bb4ddecef14",
  "pantryItemUserId": "61bab6f6fe152dfe3f836c01",
  "previousPantryId": "61cd2662390b9bb4ddecef11",
  "pantryId": "61ce78a8c0eb504a6d9767b4"
}

<!-- Delete a pantry item -->
mutation DeleteAPantryItem(
  $pantryItemId: ID
  $pantryItemUserId: ID
) {
  deleteAPantryItem(
    pantryItemId: $pantryItemId
    pantryItemUserId: $pantryItemUserId
  ) {
    pantryId
    pantryItemUserId
    createdAt
    _id
    pantryItemName
    pantryItemQuantity
  }
}

<!-- Queries -->
<!-- view all my pantry items -->
query ViewAllMyPantries {
  viewAllMyPantries {
    pantryUserId
    pantryUserName
    createdAt
    _id
    pantryType
    pantryNotes
    pantryItems {
      pantryId
      pantryItemUserId
      createdAt
      _id
      pantryItemStore
      pantryItemBrand
      pantryItemName
      pantryItemPackageDescription
      pantryItemPackageCost
      pantryItemPackageQuantity
      pantryItemPackageGrossWeightOunces
      pantryItemPackageNetWeightOunces
      pantryItemPackageServingsQuantity
      pantryItemCostPerGrossWeightOunces
      pantryItemCostPerNetWeightOunces
      pantryItemProteinsPerServingGrams
      pantryItemFatsPerServingGrams
      pantryItemCarbsPerServingGrams
      pantryItemNotes
    }
    pantryCommentThread {
      threadId
      commentUserId
      commentUserName
      createdAt
      _id
      commentText
    }
  }
}

<!-- View all pantry items -->
query ViewAllPantries {
  viewAllPantries {
    pantryUserId
    pantryUserName
    createdAt
    _id
    pantryType
    pantryNotes
    pantryItems {
      pantryId
      pantryItemUserId
      createdAt
      _id
      pantryItemStore
      pantryItemBrand
      pantryItemName
      pantryItemPackageDescription
      pantryItemPackageCost
      pantryItemPackageQuantity
      pantryItemPackageGrossWeightOunces
      pantryItemPackageNetWeightOunces
      pantryItemPackageServingsQuantity
      pantryItemCostPerGrossWeightOunces
      pantryItemCostPerNetWeightOunces
      pantryItemProteinsPerServingGrams
      pantryItemFatsPerServingGrams
      pantryItemCarbsPerServingGrams
      pantryItemNotes
    }
    pantryCommentThread {
      threadId
      commentUserId
      commentUserName
      createdAt
      _id
      commentText
    }
  }
}