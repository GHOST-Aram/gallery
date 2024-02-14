import { describe, test } from "@jest/globals";
import request from "supertest"
import { app } from "./config/test.config";
import { postData } from "./mocks/raw-data";
import { assert } from "../z-library/testing/response-assertion";

describe('Gallery PUT Requests', () => {
    test('Responds with Method not allowed, status 405: User defined Ids not allowed', 
        async() =>{
            const response = await request(app).put('/gallery')
                .send(postData)

            assert.respondsWithMethodNotAllowed(response)
        }
    )
})