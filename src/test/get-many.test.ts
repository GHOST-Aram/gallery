import { describe, test } from "@jest/globals";
import { app } from "./config/test.config";
import request from "supertest";
import { assert } from "../z-library/testing/response-assertion";


describe('GET Many Galleries', () =>{

    test('Responds with paginated data, status 200: (Default pagination = 10', 
        async() =>{
            const response = await request(app).get('/gallery')

            assert.respondsWithSuccess(response)
            assert.respondsWithPaginatedResource(response, 10)
        }
    )
})