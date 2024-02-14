import { describe, test } from "@jest/globals";
import request from "supertest"
import { app } from "./config/test.config";
import { patchData } from "./mocks/raw-data";
import { assert } from "../z-library/testing/response-assertion";

describe('Gallery PATCH route', () => {
    test('Responds with Method not allowed, status 405: Rejects batch patch request',
        async() => {
            const response = await request(app).patch('/gallery').send(patchData)

            assert.respondsWithMethodNotAllowed(response)
        }
    )

    test('Responds with validation errors, status 400: Ivalid assetId', 
        async() => {
            const response = await request(app).patch('/gallery/64c9e4f2df7cc0tgd')

            assert.respondsWithBadRequest(response)
            assert.respondsWithValidationErrors(response)
        }
    )
})