import { GenericDataAccess } from "../../z-library/bases/generic-data-access";
import { Gallery, GalleryModel, HydratedGalleryDoc } from "../../data-access/model";
import { postData } from "./raw-data";

export class DataAccess extends GenericDataAccess<GalleryModel, Gallery>{
    constructor(model: GalleryModel){
        super(model)
    }
    public createNew = jest.fn(async(data: Gallery): Promise<HydratedGalleryDoc>=>{
        return new Gallery(data)
    })

    public findByReferenceId =  jest.fn(async(refId: string): Promise<HydratedGalleryDoc| null> =>{
        if(refId === '64c9e4f2df7cc072af2ac9e4')
            return new Gallery(postData)
        
        return null
    })
}