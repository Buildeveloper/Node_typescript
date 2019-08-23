import { testDouble, expect } from './config/helpers';
import User from '../../server/modules/User/service';
const id = 11;

describe('Teste unitários do Service', () => {
    describe('Método Create', () => {
        it('Deve criar um novo Usuário', () => {
            const novoUsuario = {
                id: id,
                name: 'Novo Usuario',
                email: 'novousuario@email.com',
                password: '1234'
            };
            const user = new User();
            return user.create(novoUsuario)
                .then(data => {
                    expect(data.dataValues).to.have.all.keys(
                        ['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']
                    );
                });
        });
    });

    describe('Método Update', () => {
        it('Deve atualizar o Usuário', () => {
            const usuarioAtualizado = {
                name: 'Nome Atualizado',
                email: 'atualizado@email.com'
            };
            const user = new User();
            return user.update(id, usuarioAtualizado).then(data => {
                expect(data[0]).to.be.equal(1);
            });
        });
    });

    describe('Método GET Users', () => {
        it('Deve retornar um lista com todos usuários', () => {
            const user = new User();
            return user.getAll().then(data => {
                expect(data).to.be.an('array');
                expect(data[0]).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                )
            });
        });
    });

     describe('Método getById', () => {
        it('Retornar um usuário de acordo com o ID passado', () => {
            const id = 2;
            const user = new User();
            return user.getById(id).then(data => {
                expect(data).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                );
            });
        });
    });

    describe('Método getByEmail', () => {
        it('Retornar um usuário de acordo com o email passado', () => {
            const email = 'novousuario@email.com';
            const user = new User();
            return user.getByEmail(email).then(data => {
                expect(data).to.have.all.keys(
                    ['email', 'id', 'name', 'password']
                );
            });
        });
    });

    describe('Método DELETE', () => {
        it('Deve deletar usuário', () => {
            const user = new User();
            return user.delete(id).then(data => {
                expect(data).to.be.equal(1);
            });
        });
    });
});