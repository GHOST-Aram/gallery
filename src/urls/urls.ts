import { Router } from "express"
import { Controller } from "../controllers/controller"
import { validateAllInput } from "./inputValidators"
import { validator } from "../z-library/validation/validator"

const router = Router()

export const routesWrapper = (controller: Controller) =>{

    router.post('/:id', controller.respondWithMethodNotAllowed)
    router.post('/', validateAllInput,
        validator.handleValidationErrors
    )
    return router
}