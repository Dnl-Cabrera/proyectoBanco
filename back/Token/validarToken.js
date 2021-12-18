const jwt=require("jsonwebtoken");

const validarToken = (req,res,next) =>{

    const token = req.header("auth-token-jwt");

    if(!token){
        return (res.status(401).json({
            error:"Acceso denegado"
        }))
    }
    else{
        try {
            const verified = jwt.verify(token,"Colpatria");
            console.log(req.user);
            req.user = verified;
            next()
        } catch (error) {
            res.status(400).json({
                error:"token no es valido"
            })
        }
    }
}

module.exports = validarToken;