import { v4 as uuidV4 } from "uuid"

class specificationModel {
    id?: String;
    name: String;
    description: String;
    createdAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { specificationModel }