import { Router } from "express"
import { Controller } from "../controllers/controller"
import { validateAllInput } from "./inputValidators"
import { validator } from "../z-library/validation/validator"

const router = Router()

export const routesWrapper = (controller: Controller) =>{

    router.post('/:id', controller.respondWithMethodNotAllowed)
    router.post('/', validateAllInput,
        validator.handleValidationErrors,
        controller.addNew
    )

    router.get('/:assetId', 
        validator.validateReferenceId('assetId', { required: true }),
        validator.handleValidationErrors,
        controller.getOne
    )
    router.get('/', controller.getMany)

    router.put('/', controller.respondWithMethodNotAllowed)
    router.put('/:assetId', validator.validateReferenceId('assetId', { required: true}),
        validateAllInput,
        validator.handleValidationErrors,
        controller.updateOne
    )

    router.patch('/', controller.respondWithMethodNotAllowed)

    return router
}