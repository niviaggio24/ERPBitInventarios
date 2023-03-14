const express = require('express');
const dataBaseConection = require('./config/config')
const port = 4000
const cors = require('cors')


const app = express();
dataBaseConection()
app.use(cors())

app.use(express.json())

app.use('/api', require('./routes/file.routes'))


app.listen(port, () => {
    console.log(`Server is listening on port ${ port }`)
})