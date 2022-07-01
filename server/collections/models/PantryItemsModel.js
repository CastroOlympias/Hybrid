const { Schema, model } = require('mongoose');
const dateFormatter = require('../../configuration/DateFormatter');

const pantryItemsSchema = new Schema(
    {
        // Source Document Pantry Data
        pantryId: {
            type: String
        },
        // Context User Data
        pantryItemUserId: {
            type: String
        },
        // Document Pantry Item Data
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormatter(timestamp)
        },
        pantryItemStore: {
            type: String
        },
        pantryItemBrand: {
            type: String
        },
        pantryItemName: {
            type: String
        },
        pantryItemPackageDescription: {
            type: String
        },
        pantryItemPackageCost: {
            type: Number
        },
        pantryItemPackageQuantity: {
            type: Number
        },
        pantryItemPackageGrossWeightOunces: {
            type: Number
        },
        pantryItemPackageNetWeightOunces: {
            type: Number
        },
        pantryItemPackageServingsQuantity: {
            type: Number
        },
        pantryItemCostPerGrossWeightOunces: {
            type: Number
        },
        pantryItemCostPerNetWeightOunces: {
            type: Number
        },
        pantryItemProteinsPerServingGrams: {
            type: Number
        },
        pantryItemFatsPerServingGrams: {
            type: Number
        },
        pantryItemCarbsPerServingGrams: {
            type: Number
        },
        pantryItemNotes: {
            type: String
        },
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

const PantryItemsModel = model('PantryItemsModel', pantryItemsSchema)
module.exports = PantryItemsModel;