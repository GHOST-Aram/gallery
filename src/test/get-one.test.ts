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

    test('Responds with Not Found, status 404: Target not found', 
        async() =>{
            const response = await request(app).get('/gallery/64c9e4f2df7cc072af2ac9e8')

            assert.respondsWithNotFound(response)
        }
    )
})