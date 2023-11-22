const Product = require("../model/Product")

const createProduct = (req, res) => {}

const getProducts = (req, res) => {
    const { offset } = req.query

    Product.getProducts(offset, 20, (data, err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
}

const getProduct = (req, res) => {
    const { productID } = req.params

    Product.findByID(productID, (data, err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
}

const getLowStorage = (req, res) => {
    const { offset } = req.query
    offset = offset > 1 ? offset : 1
    
    Product.getLowStorage(offset, 10, (data, err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
}

const updateProduct = (req, res) => {}

const removeProduct = (req, res) => {}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    getLowStorage,
    removeProduct
}