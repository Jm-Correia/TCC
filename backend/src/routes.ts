import {Router,Response,Request} from 'express';
import UserController from './app/controllers/UserController';
import InvestmentFundController from './app/controllers/InvestmentFundController';
import SessionController from './app/controllers/SessionController';
import CondominiumController from './app/controllers/CondominiumController';
import { Modalidade } from './app/model/InvestmentFundo';
import {Tipo} from './app/model/Condominium';
import {Perfil} from './app/model/User';
import GroupController from './app/controllers/GroupController';
import PreCadastroController from './app/controllers/PreCadastroController';
let authConfig = require('./app/middlewares/auth');

let routes = Router();

routes.get('/config', (req: Request, res:Response)=>{
    res.json({
        Modalidade,
        Tipo,
        Perfil
    })
});
routes.post('/user', UserController.create);
routes.post('/session', SessionController.store);
routes.get('/user/:id', PreCadastroController.index);

routes.use(authConfig);

routes.post('/investment', InvestmentFundController.create);
routes.post('/condominium', CondominiumController.create);
routes.post('/group', GroupController.create);
export default routes;