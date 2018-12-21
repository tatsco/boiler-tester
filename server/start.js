const db = require('./db/db.js')

const app = require('./index')
const port = process.env.PORT || 3000

db.sync()
  .then(function(){
    app.listen(port)
  })
