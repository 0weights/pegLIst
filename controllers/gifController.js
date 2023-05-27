const path = require('path')
const helpers = require('../public/js/helpers.js')
const getRandomGif = (req, res) => {
    let gifId = req.params.gifId
    res.sendFile(path.join(__filename, '../../assets/gifs/', gifId + "." + helpers.gifsNamesList[gifId] + ".gif"))
}

module.exports = {getRandomGif}