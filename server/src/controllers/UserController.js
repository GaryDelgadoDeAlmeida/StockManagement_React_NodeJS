const User = require("../model/User")

const createUser = (req, res) => {
    // 
}

const getUsers = (req, res) => {
    const { offset } = req.query
    const limit = 20

    User.getUsers(offset, limit, (response, error) => {
        if(error) {
            res.status(500).send(error)
        } else {
            res.send(response)
        }
    })
}

const getUser = (req, res) => {
    const { userID } = req.params

    User.find(userID, (response, error) => {
        if(error) {
            res.status(500).send(error)
        } else {
            res.send(response)
        }
    })
}

const updateUser = (req, res) => {
    // 
}

const removeUser = (req, res) => {
    const { userID } = req.params

    User.delete(userID, (response, error) => {
        if(error) {
            res.status(500).send(error)
        } else {
            res.send(response)
        }
    })
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    removeUser
}