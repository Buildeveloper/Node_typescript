import { Request, Response } from 'express';
import UserController from './controller';
let UserCrt;

class UserRoutes {

    constructor(){
        UserCrt = new UserController();
    }

    index(req: Request, res: Response) {
        return UserCrt.getAll(req,res);
    }

    create(req: Request, res: Response) {
        return UserCrt.createUser(req,res);
    }

    findOne(req: Request, res: Response) {
        return UserCrt.getById(req,res);
    }

    update(req: Request, res: Response) {
        return UserCrt.updateUser(req,res);
    }

    destroy(req: Request, res: Response) {
        return UserCrt.deleteUser(req,res);        
    }
}

export default UserRoutes;