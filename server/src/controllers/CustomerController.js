const Customer = require("../model/Customer")

const createCustomer = (req, res) => {
    const contentBody = req.body
    const customer = new Customer(contentBody)

    Customer.create(customer, (data, err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
}

const getCustomer = (req, res) => {
    const { customerID } = req.params
    
    Customer.find(customerID, (data, err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
}

const getCustomerOrders = (req, res) => {
    const { customerID } = req.params

    Customer.getPastOrders(customerID, (data, err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
}

const getCustomers = (req, res) => {
    let {offset = 1} = req.query
    let limit = 20

    offset = offset >= 1 ? offset : 1
    
    Customer.getCustomers(offset, limit, (data, err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
}

const updateCustomer = (req, res) => {
    const { customerID } = req.params
    const contentBody = req.body
    const customer = new Customer(contentBody)

    Customer.update(customerID, customer, (data, err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
}

const removeCustomer = (req, res) => {
    const { customerID } = req.params
    
    Customer.delete(customerID, (data, err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
}

module.exports = {
    createCustomer,
    getCustomers,
    getCustomer,
    getCustomerOrders,
    updateCustomer,
    removeCustomer
}