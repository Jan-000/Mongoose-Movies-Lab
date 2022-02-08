const Celeb = require("../models/Celeb");

const router = require("express").Router();



router.get('/celebrities', (req, res, next) => {
	// get all the books from the db
	Celeb.find()
		.then(celebsFromDB => {
			console.log(celebsFromDB)
			// render a view
			res.render('books/index', { books: celebsFromDB })
		})
		.catch(err => next(err))
	// render a view and display the titles
})

router.get('/celebrities/:id', (req, res, next) => {
	// retrieve that book from the db
	const id = req.params.id
	console.log(id)
	Celeb.findById(id)
		.then(celebFromDB => {
			console.log(celebFromDB)
			res.render('celeb/show', { celeb: celebFromDB })
		})
		.catch(err => next(err))
})


router.get('/celebrities/new', (req, res, next) => {
	res.render('/celebrities/new')
});


router.post('/celebrities', (req, res, next) => {


	const { name, occupation, catchPhrase } = req.body

	Celebrity.create({ name, occupation, catchPhrase })
		.then(createdCelebrity => {
			console.log(createdCelebrity)
			// res.render('celebrity/detail', { PLACEHOLDER book: createdBook })
			// redirect to the detail view of that book
			res.redirect(`/celebrities/${createdCelebrity._id}`)
		})
		.catch(err => next(err))
});





/*router.post('/celebritiesupdate/:id', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body
	// by passing {new true} as a third param findByIdAndUpdate returns 
	// the updated book
	Celeb.findByIdAndUpdate(req.params.id, {
		name,
    occupation,
    catchPhrase
	}, { new: true })
		.then(updatedCelebrity => {
			console.log(updatedCelebrity)
			res.redirect(`/celebrities/${updatedCelebrity._id}`)
		})
});
*/


module.exports = router;