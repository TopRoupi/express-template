const app = require("../../app/server/index");
const { Thing } = require("../../app/server/models/index");
const request = require("supertest");
jest.setTimeout(20000);

const express = require("express");

describe("things controller", () => {
  beforeEach(async () => {
    this.thing = Thing.build({ name: "name" });
  });

  test("get things", async () => {
    await this.thing.save()

    await request(app)
      .get(`/api/things`)
      .expect(200)
      .expect("Content-type", /json/)
      .then((serverRes) => {
        expect(serverRes.body).toEqual(expect.any(Array));
        expect(serverRes.body.length).toEqual(1);
        expect(serverRes.body).toEqual(expect.arrayContaining([expect.any(Object)]));
      })
  });
});
