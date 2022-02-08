const Celeb = require("../models/Celeb")
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/MoviesLab")



const celebs = [
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

  Celeb.create(celebs)
.then(createdCeleb => {console.log(`created: ${createdCeleb}`)
mongoose.connection.close()
})
