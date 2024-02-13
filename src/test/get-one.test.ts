import { describe } from "@jest/globals";
import { app } from "./config/test.config";
import { assert } from "../z-library/testing/response-assertion";
import request from "supertest"

describe('Gallery GET Route', () => {

    test('Responds with validation errors, status 400: Invalid reference id', 
        async() => {
            const response = await request(app).get('/gallery/jjjthew843')

            assert.respondsWithBadRequest(response)
            assert.respondsWithValidationErrors(response)
        }
    )
})