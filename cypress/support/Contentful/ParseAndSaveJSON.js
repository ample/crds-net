import { Formatter } from '../Formatter'

export class ParseAndSaveJSON {
    //Stores title, slug, description, image and background image ids (if content has images)
    static storeStandardProperties(jsonObject, assetList, saveObject){
        saveObject._title = jsonObject.fields.title;
        saveObject._slug = jsonObject.fields.slug;
        saveObject._description = Formatter.normalizeText(jsonObject.fields.description);

        //Save image information, if it should exist
        if (jsonObject.fields.image){
            saveObject._imageId = jsonObject.fields.image.sys.id;
        }

        if (jsonObject.fields.background_image){
            saveObject._backgroundImageId = jsonObject.fields.background_image.sys.id;
        }
    }
}