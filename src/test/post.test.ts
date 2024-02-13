import { describe, test } from "@jest/globals";
import request from "supertest"
import { app } from "./config/test.config";
import { badData, postData } from "./mocks/raw-data";
import { assert } from "../z-library/testing/response-assertion";
import { response } from "express";

describe('Gallery POST', () => {
    test('Responds with method not allowed, status 405: Reject batch post request' ,
        async() =>{
            const response = await request(app).post('/gallery/64c9e4f2df7cc072af2ac9e4')
                .send( postData )
            assert.respondsWithMethodNotAllowed(response)
        }
    )

    test('Responds with validation errors, status 400: Invalid Input', 
    
        async() =>{
            const response = await request(app).post('/gallery')
            .send( badData )

            assert.respondsWithBadRequest(response)
            assert.respondsWithValidationErrors(response)
        }
    )

})