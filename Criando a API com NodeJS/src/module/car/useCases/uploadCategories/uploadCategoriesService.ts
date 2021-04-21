
import fs from "fs"
import csvParser from "csv-parser"
import { CreateCategorieRepositorie } from "../../repositories/implementations/catagerorieRepositorie"

interface ICreateCategorie {
    name: string,
    description: string
}

class createUploadCategoriesService {

    constructor(private categorieRepositore: CreateCategorieRepositorie) { }

    loadStream(file: Express.Multer.File): Promise<ICreateCategorie[]> {

        return new Promise((resolve, reject) => {
            const allCategoriesSend: ICreateCategorie[] = []

            const stream = fs.createReadStream(file.path) //criando uma stream de dados com o caminho do arquivo passado, necessario pois quando for arquivos grandes, se n possuir stream, podera ser dificultado a passagem de dados

            const parseFile = csvParser() // atribuindo a funcao de conversao de csv para parsefile

            stream.pipe(parseFile) //funcao pipe seria como um "then" das promisses, a cada pedaço de stream, o mesmo sera convertido, pois o pipe ira chamar a funcao

            parseFile.on("data", async (line) => {
                const { "Categoria do Automovel": categoriaCarro, "Tipo de Automovel": tipoCarro } = line

                allCategoriesSend.push(
                    {
                        name: categoriaCarro,
                        description: tipoCarro
                    }
                )

            })
                .on("end", () => {
                    fs.promises.unlink(file.path)
                    resolve(allCategoriesSend)
                })
                .on("error", (err) => {
                    reject(err)
                })

        })

    }

    async execute(file: Express.Multer.File): Promise<void> {
        const allItems = await this.loadStream(file)

        allItems.map(item => {
            const { name, description } = item
            const alReadyExist = this.categorieRepositore.checkIfCategorieAlReadyExist(name)

            if (!alReadyExist) {
                this.categorieRepositore.create(
                    {
                        name,
                        description
                    }
                )
            }
        })
    }
}

export { createUploadCategoriesService }

