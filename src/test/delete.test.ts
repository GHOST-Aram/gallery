import { describe, test } from "@jest/globals";
import request from "supertest"
import { app } from "./config/test.config";
import { assert } from "../z-library/testing/response-assertion";

describe('DELETE Gallery', () => {
    test('Responds with method not allowed, status 405: Rejects delete all',
        async() =>{
            const response = await request(app).delete('/gallery')

            assert.respondsWithMethodNotAllowed(response)
        }
    )
})