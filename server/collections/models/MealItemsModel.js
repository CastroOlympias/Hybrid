const { Schema, model } = require('mongoose');
const dateFormatter = require('../../configuration/DateFormatter');

const mealItemsSchema = new Schema(
    {
        // Source Document Meals Data
        mealId: {
            type: String
        },
        // Context User Data
        mealItemUserId: {
            type: String
        },
        // Document Meal Items Data
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormatter(timestamp)
        },
        mealItemStore: {
            type: String
        },
        mealItemBrand: {
            type: String
        },
        mealItemName: {
            type: String
        },
        mealItemDescription: {
            type: String
        },
        mealItemCost: {
            type: Number
        },
        mealItemQuantity: {
            type: Number
        },
        mealItemGrossWeightOunces: {
            type: Number
        },
        mealItemNetWeightOunces: {
            type: Number
        },
        mealItemServingsQuantity: {
            type: Number
        },
        mealItemCostPerGrossWeightOunces: {
            type: Number
        },
        mealItemCostPerNetWeightOunces: {
            type: Number
        },
        mealItemProteinsGrams: {
            type: Number
        },
        mealItemFatsGrams: {
            type: Number
        },
        mealItemCarbsGrams: {
            type: Number
        },
        mealItemNotes: {
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

const MealItemsModel = model('MealItemsModel', mealItemsSchema)
module.exports = MealItemsModel;