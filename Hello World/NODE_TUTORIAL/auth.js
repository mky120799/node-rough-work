const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/person');


const localAuthMiddleware = passport.authenticate('local', { session: false });


passport.use(new LocalStrategy(async (username, password, done) => {
    // authenticate logic here
    try {
        console.log('Received username and password:', username, password); 
        const user = await Person.findOne({ username: username });
        if (!user)
            return done(null, false, { message: 'Invalid username' });

        const isPasswordMatch = await user.comparePassword(password);
 
        if (isPasswordMatch) {
            return done(null, user);
        } else {
            return done(null, false, { message: 'Invalid password' });
        }

    } catch (err) {
        return done(err);
    }
}));

exports.localAuthMiddleware = localAuthMiddleware;