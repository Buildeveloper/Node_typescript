"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./config/helpers");
var service_1 = require("../../server/modules/User/service");
var model = require('../../server/models');
describe('Teste unitários do Service', function () {
    var defaultUser = {
        id: 1,
        name: 'Default User',
        email: 'defaultuser@email.com',
        password: '1234'
    };
    beforeEach(function (done) {
        model.User.destroy({
            where: {}
        })
            .then(function () {
            model.User.create(defaultUser).then(function () {
                console.log('Default user created');
                done();
            });
        });
    });
    describe('Método Create', function () {
        it('Deve criar um novo Usuário', function () {
            var novoUsuario = {
                id: 2,
                name: 'Novo Usuario',
                email: 'novousuario@email.com',
                password: '1234'
            };
            return service_1.default.create(novoUsuario)
                .then(function (data) {
                helpers_1.expect(data.dataValues).to.have.all.keys(['email', 'id', 'name', 'password', 'updatedAt', 'createdAt']);
            });
        });
    });
    describe('Método Update', function () {
        it('Deve atualizar o Usuário', function () {
            var usuarioAtualizado = {
                name: 'Nome Atualizado',
                email: 'atualizado@email.com'
            };
            return service_1.default.update(defaultUser.id, usuarioAtualizado).then(function (data) {
                helpers_1.expect(data[0]).to.be.equal(1);
            });
        });
    });
    describe('Método GET Users', function () {
        it('Deve retornar um lista com todos usuários', function () {
            return service_1.default.getAll().then(function (data) {
                helpers_1.expect(data).to.be.an('array');
            });
        });
    });
    describe('Método getById', function () {
        it('Retornar um usuário de acordo com o ID passado', function () {
            return service_1.default.getById(defaultUser.id).then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método getByEmail', function () {
        it('Retornar um usuário de acordo com o email passado', function () {
            return service_1.default.getByEmail(defaultUser.email).then(function (data) {
                helpers_1.expect(data).to.have.all.keys(['email', 'id', 'name', 'password']);
            });
        });
    });
    describe('Método DELETE', function () {
        it('Deve deletar usuário', function () {
            return service_1.default.delete(defaultUser.id).then(function (data) {
                helpers_1.expect(data).to.be.equal(1);
            });
        });
    });
});
