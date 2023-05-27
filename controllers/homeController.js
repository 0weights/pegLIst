const path = require('path')
const getIndexPage = (req, res) => {

    res.sendFile(path.join(__filename, '../../views/index.html'))
}

const getAllPage = (req, res) => {
    res.sendFile(path.join(__filename, '../../views/all.html'))
}

module.exports = {getIndexPage, getAllPage}