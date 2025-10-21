require('dotenv').config()
// Limpiar la API key de comillas y espacios
const validApiKey = process.env.API_KEY ? process.env.API_KEY.replace(/["']/g, '').trim() : ''

function apikey(req, res, next){
    // Excluir rutas públicas de la autenticación
    if (req.path.startsWith('/api-docs') || req.path === '/') {
        return next();
    }
    
    const apik = req.headers['x-api-key']
    
    // Debug para ver qué está pasando
    console.log('API Key recibida:', apik);
    console.log('API Key esperada:', validApiKey);
    console.log('Comparación:', apik === validApiKey);
    
    if (apik && apik.trim() === validApiKey.trim()){
        next();
    }
    else{
        res.status(401).json({
            error: "acceso no autorizado",
            received: apik ? 'key provided' : 'no key provided',
            expected: 'x-api-key header required'
        })
    }
}
module.exports = apikey