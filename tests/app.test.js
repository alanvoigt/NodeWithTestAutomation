const request = require("supertest");
const app = require("../app");

describe("API Tests", () => {
  test("GET /users should return a list of users", async () => {
    const response = await request(app).get("/users");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" },
    ]);
  });

  test("POST /users should create a new user", async () => {
    const newUser = { name: "Charlie" };
    const response = await request(app).post("/users").send(newUser);
    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({ name: "Charlie" });
    expect(response.body).toHaveProperty("id");
  });

  test("POST /users without name should return 400", async () => {
    const response = await request(app).post("/users").send({});
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Name is required" });
  });
});
