const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const dateFormatter = require('../../configuration/DateFormatter');

const userSchema = new Schema(

    {
        // Document User Data
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormatter(timestamp)
        },
        userName: {
            type: String,
            required: true
        },
        eMail: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            match: [/.+@.+\..+/, 'Must use a valid email address']
        },
        birthDate: {
            type: Date,
            required: true,
            get: timestamp => dateFormatter(timestamp)
        },
        password: {
            type: String,
            required: true,
            minlength: [8, 'Your password needs to be at least 8 characters long']
        },
        aboutMe: {
            type: String,
            required: false,
            maxlength: [120, "Your 'About Me' is too long, 120 character max limit"]
        },
        findMeFriend: {
            type: String,
            maxlength: [8, "Your find me code is too long, 8 character max"]
        },
        // Child Document Pantry Data
        userMacroDashboard: {
            type: Schema.Types.ObjectId,
            ref: 'MacroDashboardModel'
        },
        userPantry: [{
            type: Schema.Types.ObjectId,
            ref: 'PantryModel'
        }],
        // Child Document Meals Data
        userMeals: [{
            type: Schema.Types.ObjectId,
            ref: 'MealsModel'
        }],
        // Child Document Comments Data
        userComments: [{
            type: Schema.Types.ObjectId,
            ref: 'CommentsModel'
        }],
        // Child Document Friends Data
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'UserModel'
        }],
        // Child Document Blocked Data
        blocked: [{
            type: Schema.Types.ObjectId,
            ref: 'UserModel'
        }],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        }
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const UserModel = model('UserModel', userSchema);
module.exports = UserModel;