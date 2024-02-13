import { GenericDataAccess } from "../../z-library/bases/generic-data-access";
import { Gallery, GalleryModel } from "../../data-access/model";

export class DataAccess extends GenericDataAccess<GalleryModel, Gallery>{
    constructor(model: GalleryModel){
        super(model)
    }
}