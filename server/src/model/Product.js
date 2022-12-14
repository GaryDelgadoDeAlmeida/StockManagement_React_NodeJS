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

// Get low storage products
Product.getLowStorage = (offset, limit, result) => {
    sql.query("SELECT * FROM product WHERE stock <= 10 LIMIT ?", ((offset - 1) * limit, limit), (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

// Get a single product
Product.findByID = (productID, result) => {
    sql.query("SELECT * FROM product WHERE id = ? LIMIT 1", productID, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res[0], null)
    })
}

module.exports = Product