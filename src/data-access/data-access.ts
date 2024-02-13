import { GenericDataAccess } from "../z-library/bases/generic-data-access";
import { Gallery, GalleryModel, HydratedGalleryDoc } from "./model";

export class DataAccess extends GenericDataAccess<GalleryModel, Gallery>{
    constructor(model: GalleryModel){
        super(model)
    }

    public findByAssetId = async(assetId: string): Promise<HydratedGalleryDoc | null> =>{
        return await this.model.findOne({ assetId })
    }
}