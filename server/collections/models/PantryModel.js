const { Schema, model } = require('mongoose');
const dateFormatter = require('../../configuration/DateFormatter');

const pantrySchema = new Schema (
    {
        // Context User Data
        pantryUserId: {
            type: String
        },
        pantryUserName: {
            type: String
        },
        // Document Pantry Data
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormatter(timestamp)
        },
        pantryType: {
            type: String
        },
        pantryNotes: {
            type: String,
            minlength: 1,
            maxlength: [120, 'You entered too many characters to add a note']
        },
        // Child Document Data
        pantryItems: [{
            type: Schema.Types.ObjectId,
            ref: 'PantryItemsModel'
        }],
        pantryCommentThread: [{
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
)

const PantryModel = model('PantryModel', pantrySchema)
module.exports = PantryModel;