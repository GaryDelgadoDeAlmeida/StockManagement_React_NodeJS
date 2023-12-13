const sql = require("../config/database")

const Media = ({product, name, path}) => {
    this.product = product
    this.name = name
    this.path = path
    this.createdAt = new Date()
}

module.exports = Media