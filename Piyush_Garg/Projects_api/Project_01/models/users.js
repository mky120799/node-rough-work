const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
    }
});

const User = mongoose.model('users', userSchema)

module.exports = User;
