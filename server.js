// express
const express = require('express')
// app
const app = express()
const path = require('path')
app.use(express.json())
app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))
// main page
app.use('/', require('./routes/homeRout'))
app.use('/home', require('./routes/homeRout'))
app.use('/gif', require('./routes/gifRoute'))
// up and running
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'));
  });
// up and running
app.listen(5000, () => {
    console.log('serve at http://localhost:5000');
});
