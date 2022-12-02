const sql = require("../config/database")

const Product = ({name, description, caracteristics, media, stock, price}) => {
    this.name = name
    this.description = description
    this.caracteristics = caracteristics
    this.media = media
    this.stock = stock
    this.price = price
    this.createdAt = new Date()
}

// Create a new product
Product.create = (newProduct, result) => {
    sql.query("INSERT INTO product SET ?", newProduct, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result({id: res.insertId, ...newProduct}, null)
    })
}

// Get all products
Product.getProducts = (offset, limit, result) => {
    sql.query("SELECT * FROM product LIMIT ?", ((offset - 1) * limit, limit), (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

module.exports = Product