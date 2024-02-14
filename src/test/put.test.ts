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

    test('Responds with validation errors, status 400: Ivalid assetId', 
        async() => {
            const response = await request(app).put('/gallery/64c9e4f2df7cc0tgd')
                .send(postData)

            assert.respondsWithBadRequest(response)
            assert.respondsWithValidationErrors(response)
        }
    )
})