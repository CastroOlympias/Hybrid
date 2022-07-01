<!-- *** Mutations *** -->
<!-- Create a pantry item -->
mutation CreateAPantry(
  $pantryUserId: ID
  $pantryUserName: String
  $pantryType: String
  $pantryNotes: String
) {
  createAPantry(
    pantryUserId: $pantryUserId
    pantryUserName: $pantryUserName
    pantryType: $pantryType
    pantryNotes: $pantryNotes
  ) {
    pantryUserId
    pantryUserName
    createdAt
    _id
    pantryType
    pantryNotes
  }
}

<!-- edit a pantry -->
mutation EditAPantry(
  $pantryId: ID
  $pantryUserId: ID
  $pantryType: String
  $pantryNotes: String
) {
  editAPantry(
    pantryId: $pantryId
    pantryUserId: $pantryUserId
    pantryType: $pantryType
    pantryNotes: $pantryNotes
  ) {
    pantryUserId
    pantryUserName
    createdAt
    _id
    pantryType
    pantryNotes
  }
}

<!-- Edit pantry arguments -->
{
  "pantryId": "61a7e8da987abcead9ced358",
  "pantryUserId": "61a7dfbd6aedb30b51a27f3e",
  "pantryType": "White Meats"
  "pantryNotes": "Location, middle-top shelf"
}

<!-- Delete all pantryies and all pantry items -->
mutation DeleteAllPantriesAndAllPantryItems {
  deleteAllPantriesAndAllPantryItems {
    pantryUserId
    pantryUserName
    createdAt
    _id
    pantryType
    pantryNotes
  }
}

<!-- delete a pantry and all pantry items -->
mutation DeleteAPantryAndAllPantryItems($pantryId: ID, $pantryUserId: ID) {
  deleteAPantryAndAllPantryItems(
    pantryId: $pantryId
    pantryUserId: $pantryUserId
  ) {
    pantryUserId
    pantryUserName
    createdAt
    _id
    pantryType
    pantryNotes
  }
}


<!-- *** Queries *** -->
<!-- Query to view all my pantries -->
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
      pantryItemName
      pantryItemQuantity
    }
  }
}

<!-- Query all pantries -->
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
      pantryItemName
      pantryItemQuantity
    }
  }
}

<!-- Query all pantries same category -->
query ViewAllPantriesByCategory {
  viewAllPantriesByCategory {
    pantryUserId
    pantryUserName
    createdAt
    _id
    createdAt
    pantryType
    pantryNotes
    pantryItems {
      pantryId
      pantryItemUserId
      createdAt
      _id
      pantryItemName
      pantryItemQuantity
    }
}

<!-- Query single pantry -->
query ViewASinglePantryById($pantryId: ID) {
  viewASinglePantryById(pantryId: $pantryId) {
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
      pantryItemName
      pantryItemQuantity
    }
}