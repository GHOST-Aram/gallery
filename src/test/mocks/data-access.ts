import { GenericDataAccess } from "../../z-library/bases/generic-data-access";
import { Gallery, GalleryModel, HydratedGalleryDoc } from "../../data-access/model";

export class DataAccess extends GenericDataAccess<GalleryModel, Gallery>{
    constructor(model: GalleryModel){
        super(model)
    }
    public createNew = jest.fn(async(data: Gallery): Promise<HydratedGalleryDoc>=>{
        return new Gallery(data)
    })
}