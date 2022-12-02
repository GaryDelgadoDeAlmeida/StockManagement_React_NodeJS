export default class Order {

    constructor(
        customer,
        productsOrder,
        status,
        paid
    ) {
        this.customer = customer
        this.products = productsOrder
        this.status = status
        this.paid = paid
        this.createdAt = new Date()
    }
}