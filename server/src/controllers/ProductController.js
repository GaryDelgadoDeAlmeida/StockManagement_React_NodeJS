const getAllEntities = (req, res) => {
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

module.exports = {}