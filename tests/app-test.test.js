const app = require("../index");
const supertest = require("supertest");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

afterAll(async () => {
  await app.close();
});

test("POST /signup", async () => {
  const payload = { username: "test@xyz.com", password: "test@123" };
  await supertest(app)
    .post("/signup")
    .type("json")
    .send(payload)
    .expect(200)
    .then((response) => {
      console.log(response.body);
    });
});
