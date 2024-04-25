const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app');
require('dotenv').config({ path: './.env.test' });


beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
  });
  
  afterEach(async () => {
    await mongoose.connection.close();
  });


describe('/', () => {
    test('STATUS 200 OK, returns a response', async() => {
        const res = await request(app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({"msg": "Welcome to lifeSync API"});
      });
      test('STATUS 404, invalid endpoint returns Invalid Endpoint', async() => {
        const res = await request(app).get("/not-an-endpoint");
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual({"msg": "Invalid Endpoint"});
      });
})

describe('GET /users', () => {
    test('STATUS 200 OK, returns a array of all users', async() => {
        const res = await request(app).get("/users");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveLength(10);
        res.body.forEach(({ username, email, password }) => {
            expect(typeof username).toBe("string");
            expect(typeof email).toBe("string");
            expect(typeof password).toBe("string");
          });
      });
      
})

