const sql = require("../config/database")

const ProductOrder = (product, quantity) => {
    this.product = product
    this.quantity = quantity
    this.createdAt = new Date()
}

ProductOrder.getOrdersByCommandID = (orderID, result) => {
    sql.query("SELECT * FROM product_order WHERE order_id_id = ?", orderID, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

module.exports = ProductOrder