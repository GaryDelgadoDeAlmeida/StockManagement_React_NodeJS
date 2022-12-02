const express = require("express");
const { checkContentBody } = require("./functions");
const Customer = require("./model/Customer");
const Entity = require("./model/Entity");
const app = express()

// Parse the content body en json
app.use(express.json())

// Config the header of the request to allow call when the site isn't on the same server name
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Check if the user is allowed to call this API
app.use((req, res, next) => {
    console.log("Authentification réussi !")
    next()
})

// Get all entity
app.get("/api/entity", (req, res) => {
    let { offset } = req.query
    let limit = 20
    offset = offset >= 1 ? offset : 1

    Entity.getEntities(offset, limit, (data, err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
})

// Create a nex entity
app.post("/api/entity", (req, res) => {
    const contentBody = req.body
    // checkContentBody(contentBody, "entity")
    
    Entity.findBySiret(contentBody.siret, (data, err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            if(data) {
                res.status(403).send({
                    message: `An entity with the siret ${contentBody.siret} already exist`
                })
            } else {
                let entity = new Entity(contentBody)
                Entity.create(entity, (data, err) => {
                    if(err) {
                        res.status(500).send(err)
                    } else {
                        res.status(201).send(data)
                    }
                })
            }
        }
    })
})

// Get a single entity
app.get("/api/entity/:id", (req, res) => {
    res.json({
        message: "Route under construction"
    })
})

// Update a single entity
app.put("/api/entity/:id", (req, res) => {
    res.json({
        message: "Route under construction"
    })
})

// Remove a single entity
app.delete("/api/entity/:id", (req, res) => {
    res.json({
        message: "Route under construction"
    })
})

// Get all customers
app.get("/api/customer", (req, res) => {
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
})

// Create a new customer
app.post("/api/customer", (req, res) => {
    const contentBody = req.body
    const customer = new Customer(contentBody)

    Customer.create(customer, (data, err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// Get a single customer
app.get("/api/customer/:customerID", (req, res) => {
    const { customerID } = req.params
    
    Customer.find(customerID, (data, err) => {
        if(err) {
            res.status(500).send(err)
        } else {
            res.send(data)
        }
    })
})

module.exports = app