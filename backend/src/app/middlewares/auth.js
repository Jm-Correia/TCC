let jwt = require('jsonwebtoken');
let {promisify} = require('util');


module.exports = async function verifySession(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ error: 'Token is required' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, `${process.env.APP_SECRET}`);
        /**
         * Precisa Verificar se o token está expirado aqui, não?
         */
        req.userId = decoded._id;
        return next();
    } catch (err) {
        return res.status(401).json({ error: 'Token invalid' });
    }
};