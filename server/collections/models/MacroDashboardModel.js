const { Schema, model } = require('mongoose');
const dateformatter = require('../../configuration/DateFormatter')

const macroDashboardSchema = new Schema(
    {
        // Context User Data
        macroDashboardUserId: {
            type: String
        },
        macroDashboardUserName: {
            tupe: String
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateformatter(timestamp)
        },
        salesTaxRate: {
            type: Number
        },
        monthDays: {
            type: Number
        },
        dailyCost: {
            type: Number
        },
        monthlyCost: {
            type: Number
        },
        dailyMealOunces: {
            type: Number
        },
        dailyCalories: {
            type: Number
        },
        macroProteinsRatio: {
            type: Number
        },
        macroFatsRatio: {
            type: Number
        },
        macroCarbsRatio: {
            type: Number
        },
        suggestedProteinsGrams: {
            type: Number
        },
        suggestedFatsGrams: {
            type: Number
        },
        suggestedCarbsGrams: {
            type: Number
        },
        actualProteinsGrams: {
            type: Number
        },
        actualFatsGrams: {
            type: Number
        },
        actualCarbsGrams: {
            type: Number
        },
        selectedMeals: [{
            type: Schema.Types.ObjectId,
            ref: 'MealsModel'
        }],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

const MacroDashboardModel = model('MacroDashboardModel', macroDashboardSchema)
module.exports = MacroDashboardModel;