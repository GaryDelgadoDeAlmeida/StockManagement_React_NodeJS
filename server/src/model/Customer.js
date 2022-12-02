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

module.exports = Customer