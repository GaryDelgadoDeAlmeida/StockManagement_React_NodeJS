const sql = require("../config/database")

const Caracteristic = ({product, title, description}) => {
    this.product_id = product
    this.title = title
    this.description = description
    this.created_at = new Date()
}

Caracteristic.create = (caracteristic, result) => {
    sql.query("INSERT INTO caracteristic SET ?", caracteristic, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result({id: res.insertId, ...caracteristic}, null)
    })
}

Caracteristic.find = (caracteristicID, result) => {
    sql.query("SELECT * FROM caracteristic WHERE id = ?", caracteristicID, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

Caracteristic.findByProduct = (productID, result) => {
    sql.query("SELECT * FROM caracteristic WHERE product_id = ?", productID, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

Caracteristic.update = (caracteristicID, fields, result) => {
    sql.query("UPDATE TABLE caracteristic WHERE id = ? SET ?", (caracteristicID, fields), (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

Caracteristic.delete = (caracteristicID, result) => {
    sql.query("DELETE FROM caracteristic WHERE id = ?", caracteristicID, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

module.exports = Caracteristic