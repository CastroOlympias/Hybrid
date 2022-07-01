const { Schema, model } = require('mongoose');
const dateFormatter = require('../../configuration/DateFormatter')

const repliesSchema = new Schema(
    {
        // Source Document (Thread Identifier) Pantry, Meals
        threadId: {
            type: String
        },
        // Source Document Comment Data
        commentId: {
            type: String
        },
        commentUserId: {
            type: String
        },
        // Context User Data
        replyUserId: {
            type: String
        },
        replyUserName: {
            type: String
        },
        // Document Reply Data
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormatter(timestamp)
        },
        replyText: {
            type: String,
            required: 'You must enter text to create a reply',
            minlength: 1,
            maxlength: [320, 'You entered too many caracters to add your reply']
        }
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        }
    }
)

const RepliesModel = model('RepliesModel', repliesSchema)
module.exports = RepliesModel;