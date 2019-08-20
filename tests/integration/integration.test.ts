import { app, request, expect } from './config/helpers';

describe('Testes de Integraçcão', () => {
    describe('GET /api/users/all', () => {
        it('Deve retornar um JSON com todos os Usuário', done => {
            // Instancia o APP para subir a aplicação (rotas)
            request(app)
                .get('/api/users/all')
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    })

    describe('GET /api/users/:id', () => {
        it('Deve retonar JSON com apenas o Usuário', done => {
            request(app)
                .get(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });

    describe('POST /api/users/new', () => {
        it('Deve criar Usuário', done => {
            const user = { nome: 'Teste' };
            request(app)
                .post('/api/users/new')
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });

    describe('PUT /api/users/:id/edit', () => {
        it('Deve atualizar Usuário', done => {
            const user = { nome: 'TesteUpdate' };
            request(app)
                .put(`/api/users/${1}/edit`)
                .send(user)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });

    describe('DELETE /api/users/:id', () => {
        it('Deve deletar Usuário', done => {
            request(app)
                .delete(`/api/users/${1}`)
                .end((error, res) => {
                    expect(res.status).to.equal(200);
                });
        });
    });
});