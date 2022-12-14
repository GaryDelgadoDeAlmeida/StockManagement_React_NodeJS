const sql = require("../config/database")

const Customer = ({firstname, lastname, address, zipCode, city, country, email, phone, fax}) => {
    this.firstname = firstname
    this.lastname = lastname
    this.address = address
    this.zipCode = zipCode
    this.city = city
    this.country = country
    this.email = email
    this.phone = phone
    this.fax = fax
}

// Create a new customer to the database
Customer.create = (newCustomer, result) => {
    sql.query("INSERT INTO customer SET ?", newCustomer, (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
      
        result({ id: res.insertId, ...newCustomer }, null);
    })
}

// Get all customers
Customer.getCustomers = (offset, limit, result) => {
    sql.query(`SELECT * FROM customer LIMIT ${(offset - 1) * limit}, ${limit}`, (err, res) => {
        if (err) {
            result(null, err);
            return;
        }
    
        result(res, null)
    })
}

// Find a customer by id
Customer.find = (customerID, result) => {
    sql.query("SELECT * FROM customer WHERE id = ?", customerID, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        if(!res[0]) {
            result({}, null)
            return
        }

        result(res[0], null)
    })
}

// Find a customer by email
Customer.findByEmail = (customerEmail, result) => {
    sql.query("SELECT * FROM customer WHERE email = ? LIMIT 1", customerEmail, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

// Update a customer by id
Customer.update = (customerID, customer, result) => {
    sql.query("UPDATE FROM customer WHERE id = ? SET ?", customerID, customer, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result({id: customerID, ...customer}, null)
    })
}

// Remove a customer
Customer.delete = (customerID, result) => {
    sql.query("DELETE FROM customer WHERE id = ?", customerID, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

// Get customer orders
Customer.getOngoingOrders = (customerID, result) => {
    sql.query(`SELECT * FROM \`order\` as ord WHERE ord.customer_id_id = ${customerID} AND status = "ONGOING"`, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

// Get customer orders
Customer.getPastOrders = (customerID, result) => {
    sql.query(`SELECT * FROM \`order\` as ord WHERE ord.customer_id_id = ${customerID} AND status = "DELIVERED"`, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

module.exports = Customer