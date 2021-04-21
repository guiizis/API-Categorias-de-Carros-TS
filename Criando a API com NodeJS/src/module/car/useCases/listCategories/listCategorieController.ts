import { Request, Response } from 'express';
import { listCategoriesService } from './listCategorieService';


class listCategoriesController {
    constructor(private listService: listCategoriesService) { }

    handle(req: Request, res: Response): Response {
        const all = this.listService.execute()
        return res.json(all)
    }
}

export { listCategoriesController }