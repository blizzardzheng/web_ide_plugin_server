const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8081  // SET OUR PORT
import getPackageInfos from './getPackageInfos'

app.use(cors());
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('it works')
})

app.get('/packages', (req, res) => {
  res.json(getPackageInfos())
})

app.get('/packages/:pkgId', (req, res) => {
  res.json(getPackageInfos(req.params.pkgId))
})

// app.get('/packages/:pkgId/download', require('./getPackageScript'))
console.log(`app is listen on localhost:${port}`);
app.listen(port)