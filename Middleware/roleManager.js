exports.isAdmin = (req, res, next) => {
    console.log("The user is from the middleware", req.user)
    //check if there's a user
    if(req.user == null){
        return res.status(401).json({message:'No user configured'});
    }
    //check if roles exist on this user
    if(req.user.role == null)
   
   { console.log(req.user.role)
        return res.status(401).json({message:'No roles found'});
    }

    //check if the user has the admin role. 
    if(req.user.role.includes('ADMIN')){
        return res.status(401).json({messsage:'Allowed for admin users'});
    }
    
    next();
}