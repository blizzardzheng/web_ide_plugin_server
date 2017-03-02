const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8081  // SET OUR PORT
import getPackageInfos from './getPackageInfos'

const corsOptions = {
  origin: 'http://localhost:8060',
  optionsSuccessStatus: 200,
  credentials: true
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.get('/', function (req, res) {
  res.send('it works')
})

app.get('/packages', (req, res) => {
  res.set(
    'Content-Type', 'application/vnd.coding.v2+json;charset=UTF-8'
  )
  res.json(getPackageInfos())
})

app.get('/packages/:pkgId', (req, res) => {
  res.set(
    'Content-Type', 'application/vnd.coding.v2+json;charset=UTF-8'
  )
  res.json(getPackageInfos(req.params.pkgId))
})

// app.get('/packages/:pkgId/download', require('./getPackageScript'))
console.log(`app is listen on localhost:${port}`);
app.listen(port)