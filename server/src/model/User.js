const sql = require("../config/database")

const User = ({firstname, lastname, email, password}) => {
    this.firstname = firstname
    this.lastname = lastname
    this.email = email
    this.password = password
    this.roles = ["ROLE_USER"]
    this.created_at = new Date()
}

User.create = (user, result) => {
    sql.query("INSERT INTO user SET ?", user, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result({id: res.insertId, ...user}, null)
    })
}

User.getUsers = (offset, limit, result) => {
    sql.query(`SELECT * FROM user ORDER BY lastname ASC, firstname ASC LIMIT ${(offset - 1) * limit}, ${limit}`, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

User.find = (userID, result) => {
    sql.query("SELECT * FROM user WHERE id = ?", userID, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

User.update = (userID, fields, result) => {
    sql.query("UPDATE TABLE user WHERE id = ? SET ?", (userID, fields), (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result({id: userID, ...fields}, null)
    })
}

User.delete = (userID, result) => {
    sql.query("DELETE FROM user WHERE id = ?", userID, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

module.exports = User