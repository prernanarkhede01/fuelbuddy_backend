var jwt = require('jsonwebtoken');

const JWT_SECRET = "pr@j_l@ves_$u$h";

const fetchvowner = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
   
    const token = req.header('auth-token');
    
    // console.log("token",token)
    if (!token) {
        res.status(401).send({ error: "No token. Access Denied !" })
    }
    try {
        const data = jwt.verify(token,JWT_SECRET);
        // console.log(data)
        req.user = data;
     
        next();
    } catch (error) {
        // res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchvowner;



