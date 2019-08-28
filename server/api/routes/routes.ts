import { Application, Request, Response } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from '../../modules/auth/auth';

class Routes {

    constructor() {}

    initRoutes(app: Application, auth: any): void {
        app.route('/api/users/all').all(auth.config().autenticate()).get(UserRoutes.index);
        app.route('/api/users/create').all(auth.config().autenticate()).post(UserRoutes.create);
        app.route('/api/users/:id').all(auth.config().autenticate()).get(UserRoutes.findOne);
        app.route('/api/users/:id/update').all(auth.config().autenticate()).put(UserRoutes.update);
        app.route('/api/users/:id/destroy').all(auth.config().autenticate()).delete(UserRoutes.destroy);
        app.route('/token').post(TokenRoutes.auth);
    }
}

export default new Routes();