const jwt = require('jsonwebtoken');

const jwtAuthMiddleware = (req, res, next) => {
    //extract the token from the request header
    const token = req.headers.authorization.split(' ')[1];
    if(!token) return res.status(401).json({error: 'Unauthorized access, token missing'});

    //verify the token
    try{
        //verify the token
        jwt.verify(token, process.env.JWT_SECRET)

        //attach user information to the request object
        req.user = jwt.decode(token);
        next();

    }catch(err){
        console.log(err);   
        res.status(401).json({error: 'Unauthorized access, token invalid'});
        }
    };


    // Function to genrate JWT token
    const generateToken = (user) => {
        //generate a token
        const token = jwt.sign(user, process.env.JWT_SECRET, {expiresIn: '1h'});
        return token;
    };

    module.exports = {
        jwtAuthMiddleware,
        generateToken
    }