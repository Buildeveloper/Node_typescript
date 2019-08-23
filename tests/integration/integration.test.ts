import { app, request, expect } from './config/helpers';
import * as HTTPStatus from 'http-status';

describe('Testes de Integraçcão', () => {

    'use strict';

    const config = require('../../server/config/env/config')();
    const model = require('../../server/models');

    let id;

    const userTest = {
        id: 100,
        name: 'Usuário Teste',
        email: 'teste@email.com',
        password: 'teste'
    };

    const userDefualt = {
        id: 1,
        name: 'Defalt User',
        email: 'defalt@email.com',
        password: 'defalt'
    };

    beforeEach((done) => {
        model.User.destroy({
            where: {}
        })
        .then(() => {
            return model.User.create(userDefualt);
        })
        .then(user => {
            model.User.create(userTest)
                .then(() => {
                    done();
                });
        });
    });

    describe('GET /api/users/all', () => {
        it('Deve retornar um Array com todos os Usuário', done => {
            // Instancia o APP para subir a aplicação (rotas)
            request(app)
                .get('/api/users/all')
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    expect(res.body.payload).to.be.an('array');
                    expect(res.body.payload[0].name).to.be.equal(userDefualt.name);
                    expect(res.body.payload[0].email).to.be.equal(userDefualt.email);
                    done(error);
                });
        });
    })

    describe('GET /api/users/:id', () => {
        it('Deve retonar JSON com apenas o Usuário', done => {
            request(app)
                .get(`/api/users/${userDefualt.id}`)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    expect(res.body.payload.id).to.equal(userDefualt.id);
                    expect(res.body.payload).to.have.all.keys([
                        'id', 'name', 'email', 'password'
                    ]);
                    id = res.body.payload.id;
                    done(error);
                });
        });
    });

    describe('POST /api/users/create', () => {
        it('Deve criar Usuário', done => {
            const user = { 
                id: 2,
                name: 'Usuario Teste' ,
                email: 'usuario@email.com',
                password: 'novouser'
            };
            request(app)
                .post('/api/users/create')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    expect(res.body.payload.id).to.eql(user.id);
                    expect(res.body.payload.name).to.eql(user.name);
                    expect(res.body.payload.email).to.eql(user.email);
                    done(error);
                });
        });
    });

    describe('PUT /api/users/:id/update', () => {
        it('Deve atualizar Usuário', done => {
            const user = { 
                name: 'TestUpdate' ,
                email: 'update@email.com.br'
            };
            request(app)
                .put(`/api/users/${id}/update`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    expect(res.body.payload).to.have.all.keys([
                        'id'
                    ]);
                    done(error);
                });
        });
    });

    describe('DELETE /api/users/:id/destroy', () => {
        it('Deve deletar Usuário', done => {
            request(app)
                .delete(`/api/users/${userTest.id}/destroy`)
                .end((error, res) => {
                    expect(res.status).to.equal(HTTPStatus.OK);
                    expect(res.body.payload).to.have.all.keys([
                        'id'
                    ]);
                    done(error);
                });
        });
    });
});