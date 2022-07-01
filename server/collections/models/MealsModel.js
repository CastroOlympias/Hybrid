const { Schema, model } = require('mongoose');
const dateFormatter = require('../../configuration/DateFormatter');

const MealsSchema = new Schema(
    {
        // Context User Data
        mealUserId: {
            type: String
        },
        mealUserName: {
            type: String
        },
        // Document Meals Data
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormatter(timestamp)
        },
        mealName: {
            type: String
        },
        mealQuantity: {
            type: Number
        },
        mealCost: {
            type: Number
        },
        mealProteins: {
            type: Number
        },
        mealFats: {
            type: Number
        },
        mealCarbs: {
            type: Number
        },
        mealNotes: {
            type: String
        },
        // Child Document Data
        mealItems: [{
            type: Schema.Types.ObjectId,
            ref: 'MealItemsModel'
        }],
        mealCommentThread: [{
            type: Schema.Types.ObjectId,
            ref: 'CommentsModel'
        }],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
);

const MealsModel = model('MealsModel', MealsSchema)
module.exports = MealsModel;