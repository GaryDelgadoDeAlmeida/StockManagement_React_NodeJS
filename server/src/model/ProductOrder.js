export default class ProductOrder {

    constructor(
        product,
        quantity
    ) {
        this.product = product
        this.quantity = quantity
        this.createdAt = new Date()
    }
}