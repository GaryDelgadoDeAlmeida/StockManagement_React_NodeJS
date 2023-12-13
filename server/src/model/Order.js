const sql = require("../config/database")

const Order = ({customer, productsOrder, status, paid}) => {
    this.customer = customer
    this.products = productsOrder
    this.status = status
    this.paid = paid
    this.createdAt = new Date()
}

module.exports = Order