const { application } = require("express");
const express = require("express");
// const { checkContentBody } = require("./functions");
const Customer = require("./model/Customer");
const Entity = require("./model/Entity");
const Product = require("./model/Product");
const ProductOrder = require("./model/ProductOrder");
const app = express()

// Controller
const CaracteristicController = require("./controllers/CaracteristicController")
const EntityController = require("./controllers/EntityController")
const CustomerController = require("./controllers/CustomerController")
const OrderController = require("./controllers/OrderController")
const ProductController = require("./controllers/ProductController")
const UserController = require("./controllers/UserController")

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


/* ------------------------------------------------------
    Entity
------------------------------------------------------ */

// Get all entity
app.get("/api/entity", (req, res) => EntityController.getEntities(req, res))

// Create a new entity
app.post("/api/entity", (req, res) => EntityController.createEntity(req, res))

// Get a single entity
app.get("/api/entity/:id", (req, res) => EntityController.getEntity(req, res))

// Update a single entity
app.put("/api/entity/:id", (req, res) => EntityController.updateEntity(req, res))

// Remove a single entity
app.delete("/api/entity/:id", (req, res) => EntityController.removeEntity(req, res))

// Get all products from an entity
app.get("/api/entity/:id/products", (req, res) => EntityController.getEntityProducts(req, res))


/* ------------------------------------------------------
    Customer
------------------------------------------------------ */

// Get all customers
app.get("/api/customer", (req, res) => CustomerController.getCustomers(req, res))

// Create a new customer
app.post("/api/customer", (req, res) => CustomerController.createCustomer(req, res))

// Get a single customer
app.get("/api/customer/:customerID", (req, res) => CustomerController.getCustomer(req, res))

// Update a customer
app.put("/api/customer/:customerID", (req, res) => CustomerController.updateCustomer(req, res))

// Delete a customer
app.delete("/api/customer/:customerID", (req, res) => CustomerController.removeCustomer(req, res))

// Get all orders of a customer
app.get("/api/customer/:customerID/orders", (req, res) => CustomerController.getCustomerOrders(req, res))


/* ------------------------------------------------------
    Product
------------------------------------------------------ */
app.get("/api/product", (req, res) => ProductController.getProducts(req, res))

app.post("/api/product", (req, res) => ProductController.createProduct(req, res))

app.get("/api/product/low-storage", (req, res) => ProductController.getLowStorage(req, res))

app.get("/api/product/:productID", (req, res) => ProductController.getProduct(req, res))

app.put("/api/product/:productID", (req, res) => ProductController.updateProduct(req, res))

app.post("/api/product/:productID/caracteristic", (req, res) => CaracteristicController.createCaracteristic(req, res))

app.get("/api/product/:productID/caracteristics", (req, res) => CaracteristicController.getCaracteristics(req, res))

app.put("/api/product/:productID/caracteristic/:caracteristicID", (req, res) => CaracteristicController.updateCaracteristic(req, res))

app.delete("/api/product/:productID", (req, res) => ProductController.removeProduct(req, res))

app.delete("/api/product/:productID/caracteristic/:caracteristicID", (req, res) => CaracteristicController.removeCaracteristic(req, res))


/* ------------------------------------------------------
    Order
------------------------------------------------------ */
app.get("/api/orders", (req, res) => OrderController.getOrders(req, res))

app.post("/api/orders", (req, res) => OrderController.createOrder(req, res))

app.get("/api/orders/:orderID", (req, res) => OrderController.getOrder(req, res))


/* ------------------------------------------------------
    User
------------------------------------------------------ */
app.get("/api/user", (req, res) => UserController.getUsers(req, res))

app.post("/api/user", (req, res) => UserController.createUser(req, res))

app.put("/api/user", (req, res) => UserController.updateUser(req, res))


module.exports = app