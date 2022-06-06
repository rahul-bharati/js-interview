const app = require("../index");
const supertest = require("supertest");
const jwt = require("jsonwebtoken");
const sequelize = require("sequelize");
const Data = require("../models/data");
const dataToCheck = require("../data/data.json")[0];

const { JWT_SECRET } = process.env;

beforeEach(async () => {
  await Data.sync({ force: true });
});

describe("test signup route", () => {
  test("POST /signup", async () => {
    const payload = { username: "test@xyz.com", password: "test@123" };
    await supertest(app)
      .post("/signup")
      .type("json")
      .send(payload)
      .expect(200)
      .then((response) => {
        const token = response.body.token;
        const verifyToken = jwt.sign(
          { username: payload.username },
          JWT_SECRET
        );
        expect(token).toBe(verifyToken);
      });
  });
});

describe("test process route", () => {
  test("POST /process", async () => {
    const payload = { username: "test@xyz.com", password: "test@123" };

    const token = await supertest(app)
      .post("/signup")
      .type("json")
      .send(payload)
      .expect(200)
      .then((response) => response.body.token);

    await supertest(app)
      .post("/process")
      .set("Authorization", "bearer " + token)
      .expect(200)
      .then(async () => {
        const data = await Data.findByPk(dataToCheck.id);
        expect(data.id).toBe(dataToCheck.id);
        expect(data.randAlphabet).toBe(dataToCheck.randAlphabet);
      });
  });
});

describe("test fetch route", () => {
  test("GET /fetch", async () => {
    const payload = { username: "test@xyz.com", password: "test@123" };

    const token = await supertest(app)
      .post("/signup")
      .type("json")
      .send(payload)
      .expect(200)
      .then((response) => response.body.token);

    await supertest(app)
      .post("/process")
      .set("Authorization", "bearer " + token)
      .expect(200);

    await supertest(app)
      .get("/fetch")
      .expect(200)
      .then((response) => {
        const { data } = response.body;
        expect(data[0].id).toBe(dataToCheck.id);
        expect(data[0].randAlphabet).toBe(dataToCheck.randAlphabet);
      });
  });
});
