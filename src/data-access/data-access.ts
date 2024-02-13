import { GenericDataAccess } from "../z-library/bases/generic-data-access";
import { Gallery, GalleryModel } from "./model";

export class DataAccess extends GenericDataAccess<GalleryModel, Gallery>{
    constructor(model: GalleryModel){
        super(model)
    }
}