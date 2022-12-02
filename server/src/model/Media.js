export default class Media {

    constructor(
        product,
        name,
        path
    ) {
        this.product = product
        this.name = name
        this.path = path
        this.createdAt = new Date()
    }
}