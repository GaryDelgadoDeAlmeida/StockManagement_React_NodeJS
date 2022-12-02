const sql = require("../config/database")

const Entity = ({name, socialName, legalStatus, siret, siren, address, zipCode, country}) => {
    this.name = name
    this.socialName = socialName
    this.legalStatus = legalStatus
    this.siret = siret
    this.siren = siren
    this.address = address
    this.zipCode = zipCode
    this.city = city
    this.country = country
    this.products = []
}

// Insert a new entity
Entity.create = (newEntity, result) => {
    sql.query("INSERT INTO entity SET ?", newEntity, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

// Get all entities
Entity.getEntities = (offset, limit, result) => {
    sql.query(`SELECT * FROM entity LIMIT ${(offset - 1) * limit}, ${limit}`, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        result(res, null)
    })
}

// Get a single entity
Entity.find = (entityID, result) => {
    sql.query("SELECT * FROM entity WHERE id = ?", entityID, (err, res) => {
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

// Get a single entity by SIRET number
Entity.findBySiret = (siret, result) => {
    sql.query("SELECT * FROM entity WHERE siret = ?", siret, (err, res) => {
        if(err) {
            result(null, err)
            return
        }

        if(!res[0]) {
            result([], null)
            return
        }

        result(res[0], null)
    })
}

module.exports = Entity