import { NextFunction, Request, Response } from "express-serve-static-core";
import { DataAccess } from "../data-access/data-access";
import { GenericController } from "../z-library/bases/generic-controller";
import { Gallery } from "../data-access/model";

export class Controller extends GenericController<DataAccess>{
    constructor(dataAccess: DataAccess){
        super(dataAccess)
    }

    public addNew = async(req: Request, res: Response, next: NextFunction) =>{
        const inputData:Gallery = req.body

        try {
            const exisitingDoc = await this.dataAccess.findByAssetId(inputData.assetId)

            if(exisitingDoc){
                this.respondWithConflict(res)
            } 
            const newDocument = await this.dataAccess.createNew(inputData)
            this.respondWithCreatedResource(newDocument.id, res)
        } catch (error) {
            next(error)
        }   
    }

    public getOne = async(req: Request, res: Response, next: NextFunction) =>{
        const assetId = req.params.assetId

        try {
            const foundDocument = await this.dataAccess.findByAssetId(assetId)

            if(foundDocument){
                this.respondWithFoundResource(foundDocument, res)
            } else{
                this.respondWithNotFound(res)
            }
        } catch (error) {
            next(error)
        }
    }
}

