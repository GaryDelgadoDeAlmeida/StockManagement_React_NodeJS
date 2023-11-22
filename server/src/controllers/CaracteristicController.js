const Caracteristic = require("../model/Caracteristic")
const Product = require("../model/Product")

const createCaracteristic = (req, res) => {
    const { productID } = req.params
    const fields = req.body

    Product.findByID(productID, (response, error) => {
        if(error) {
            res.status(404).send("Product couldn't be found")
            return
        }

        let caracteristic = new Caracteristic({...fields})
        Caracteristic.create(caracteristic, (response, error) => {
            if(error) {
                res.send(500).send("An error has been encountered.")
                return
            }

            res.send(response)
        })
    })
}

const getCaracteristics = (req, res) => {}

const updateCaracteristic = (req, res) => {
    const { productID, caracteristicID } = req.params
    const fields = req.body

    Product.findByID(productID, (response, error) => {
        if(error) {
            res.status(404).send("The product coundn't be found")
            return
        }

        Caracteristic.find(caracteristicID, (response, error) => {
            if(error) {
                res.status(404).send("The product coundn't be found")
                return
            }
        })

        Caracteristic.update(caracteristicID, fields, (response, error) => {
            // 
        })
    })
}

const removeCaracteristic = (req, res) => {}

module.exports = {
    createCaracteristic,
    getCaracteristics,
    updateCaracteristic,
    removeCaracteristic
} 