import { Response } from "express"
import { Request } from "express"
import { createUploadCategoriesService } from "./uploadCategoriesService"

class uploadCategoriesController {

    constructor(private uploadService: createUploadCategoriesService) { }

    handle(req: Request, res: Response) {

        const { file } = req

        this.uploadService.execute(file)

        return res.status(201).send("file uploaded")
    }

}

export { uploadCategoriesController }