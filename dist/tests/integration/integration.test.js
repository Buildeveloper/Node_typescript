"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jwt-simple");
var helpers_1 = require("./config/helpers");
var HTTPStatus = require("http-status");
describe('Testes de Integraçcão', function () {
    'use strict';
    var config = require('../../server/config/env/config')();
    var model = require('../../server/models');
    var token;
    var id;
    var userTest = {
        id: 100,
        name: 'Usuário Teste',
        email: 'teste@email.com',
        password: 'teste'
    };
    var userDefualt = {
        id: 2,
        name: 'Paulo',
        email: 'paulo@email.com',
        password: '123'
    };
    beforeEach(function (done) {
        model.User.destroy({ where: {} })
            .then(function () {
            return model.User.create(userDefualt);
        })
            .then(function (user) {
            model.User.create(userTest)
                .then(function () {
                token = jwt.encode({ id: user.id }, config.secret);
                done();
            });
        });
    });
    describe('POST /token', function () {
        it('Deve receber um JWT', function (done) {
            var credentials = {
                email: userDefualt.email,
                password: userDefualt.password
            };
            helpers_1.request(helpers_1.app)
                .post('/token')
                .send(credentials)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.token).to.equal("" + token);
                done(error);
            });
        });
        it('Não deve gerar Token', function (done) {
            var credentials = {
                email: 'email@qualquer.com',
                password: 'qualquer123'
            };
            helpers_1.request(helpers_1.app)
                .post('/token')
                .send(credentials)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.UNAUTHORIZED);
                helpers_1.expect(res.body).to.empty;
                done(error);
            });
        });
    });
    describe('GET /api/users/all', function () {
        it('Deve retornar um Array com todos os Usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get('/api/users/all')
                .set('Content-Type', 'application/json')
                .set('Authorization', "Bearer " + token)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload).to.be.an('array');
                helpers_1.expect(res.body.payload[0].name).to.be.equal(userDefualt.name);
                helpers_1.expect(res.body.payload[0].email).to.be.equal(userDefualt.email);
                done(error);
            });
        });
    });
    describe('GET /api/users/:id', function () {
        it('Deve retonar JSON com apenas o Usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .get("/api/users/" + userDefualt.id)
                .set('Content-Type', 'application/json')
                .set('Authorization', "Bearer " + token)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id).to.equal(userDefualt.id);
                helpers_1.expect(res.body.payload).to.have.all.keys([
                    'id', 'name', 'email', 'password'
                ]);
                id = res.body.payload.id;
                done(error);
            });
        });
    });
    describe('POST /api/users/create', function () {
        it('Deve criar Usuário', function (done) {
            var user = {
                id: 9,
                name: 'Usuario Teste',
                email: 'usuario@email.com',
                password: 'novouser'
            };
            helpers_1.request(helpers_1.app)
                .post('/api/users/create')
                .set('Content-Type', 'application/json')
                .set('Authorization', "Bearer " + token)
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                helpers_1.expect(res.body.payload.id).to.eql(user.id);
                helpers_1.expect(res.body.payload.name).to.eql(user.name);
                helpers_1.expect(res.body.payload.email).to.eql(user.email);
                done(error);
            });
        });
    });
    describe('PUT /api/users/:id/update', function () {
        it('Deve atualizar Usuário', function (done) {
            var user = {
                name: 'TestUpdate',
                email: 'update@email.com.br'
            };
            helpers_1.request(helpers_1.app)
                .put("/api/users/" + id + "/update")
                .set('Content-Type', 'application/json')
                .set('Authorization', "Bearer " + token)
                .send(user)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            });
        });
    });
    describe('DELETE /api/users/:id/destroy', function () {
        it('Deve deletar Usuário', function (done) {
            helpers_1.request(helpers_1.app)
                .del("/api/users/" + userTest.id + "/destroy")
                .set('Content-Type', 'application/json')
                .set('Authorization', "Bearer " + token)
                .end(function (error, res) {
                helpers_1.expect(res.status).to.equal(HTTPStatus.OK);
                done(error);
            });
        });
    });
});
