const express = require('express')
const path = require('path')
const expressLayouts = require('express-ejs-layouts')

const app = express()

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.use(expressLayouts)

app.use(express.static(path.join(__dirname, 'public')))

//router
const router = require('./routes/router')
app.use(router.routes)

/*
app.get('/', (req, res) => {
    res.send('Dashboard con Node Js')
})
*/

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })