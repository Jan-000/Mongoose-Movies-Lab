const Celebrity = require("../models/Celebrity")
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/MoviesLab")



const celebrities = [
{
    name: "Popeye",
    occupation: "Sailor",
    catchPhrase: "Damn!",
  },

  {
    name: "Chad",
    occupation: "Surfer",
    catchPhrase: "Easy!",
  },

  {
    name: "Helmut",
    occupation: "Lokfuehrer",
    catchPhrase: "totooot",
  }]

  Celebrity.create(celebrities)
.then(createdCelebrity => {console.log(`created: ${createdCelebrity}`)
mongoose.connection.close()
})
