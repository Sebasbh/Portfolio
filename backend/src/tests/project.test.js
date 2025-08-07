import request from 'supertest';
import app from '../index';

describe('Project API', () => {
    let createdProjectId;

    it('should create a new project', async () => {
        const res = await request(app)
            .post('/projects')
            .send({
                name: 'Test Project',
                description: 'A project for testing',
            });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.name).toBe('Test Project');
        createdProjectId = res.body.id;
    });

    it('should get all projects', async () => {
        const res = await request(app).get('/projects');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    it('should get a project by id', async () => {
        const res = await request(app).get(`/projects/${createdProjectId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('id', createdProjectId);
    });

    it('should update a project', async () => {
        const res = await request(app)
            .put(`/projects/${createdProjectId}`)
            .send({ name: 'Updated Project' });
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe('Updated Project');
    });

    it('should delete a project', async () => {
        const res = await request(app).delete(`/projects/${createdProjectId}`);
        expect(res.statusCode).toBe(204);
    });

    it('should return 404 for non-existent project', async () => {
        const res = await request(app).get('/projects/invalid-id');
        expect(res.statusCode).toBe(404);
    });
});