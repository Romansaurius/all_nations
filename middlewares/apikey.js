require('dotenv').config()
const validApiKey = process.env.API_KEY

function apikey(req, res, next){
    // Excluir rutas de Swagger de la autenticación
    if (req.path.startsWith('/api-docs')) {
        return next();
    }
    
    const apik = req.headers['x-api-key']
    if (apik && apik === validApiKey){
        next();
    }
    else{
        res.status(401).json({error : "acceso no autorizado"})
    }
}
module.exports = apikey