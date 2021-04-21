import { Response, Request } from 'express';
import { CreateCategorieService } from './createCategorieService';


class createCategorieController {

    constructor(private CategorieService: CreateCategorieService) { }

    handle(req: Request, res: Response): Response {
        const { name, description } = req.body

        this.CategorieService.execute({ name, description })

        return res.status(201).send("Catagorie inserted")

    }

}

export { createCategorieController }