const Entity = require("../model/Entity")

const getEntities = (req, res) => {
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
}

const createEntity = (req, res) => {
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
}

const getEntity = (req, res) => {
    res.json({
        message: "Route under construction"
    })
}

const updateEntity = (req, res) => {
    res.json({
        message: "Route under construction"
    })
}

const removeEntity = (req, res) => {
    res.json({
        message: "Route under construction"
    })
}

const getEntityProducts = (req, res) => {
    res.json({
        message: "Route under construction"
    })
}

module.exports = {
    getEntities,
    createEntity,
    getEntity,
    updateEntity,
    removeEntity,
    getEntityProducts
}