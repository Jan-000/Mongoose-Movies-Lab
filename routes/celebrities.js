const Celebrity = require("../models/Celebrity");

const router = require("express").Router();



router.get('/celebrities', (req, res, next) => {
	// get all the books from the db
	Celebrity.find()
		.then(celebritiesFromDB => {
			//console.log(celebritiesFromDB)
			// render a view
			res.render('celebrities/index', { celebrities: celebritiesFromDB })
		})
		.catch(err => next(err))
	// render a view and display the titles
})




router.get('/celebrities/new', (req, res, next) => {
	res.render('celebrities/new')
});


router.post('/celebrities', (req, res, next) => {


	const { name, occupation, catchPhrase } = req.body
console.log("this is the req in celeb route", req)
	Celebrity.create({ name, occupation, catchPhrase })
		.then(createdCelebrity => {
			console.log(createdCelebrity)
			// res.render('celebrity/detail', { PLACEHOLDER book: createdBook })
			// redirect to the detail view of that book
			res.redirect(`/celebrities/${createdCelebrity._id}`)
		})
		.catch(err => next(err))
});

router.get('/celebrities/:id', (req, res, next) => {
	// retrieve that celeb from the db
	const id = req.params.id
	console.log(id)
	Celebrity.findById(id)
		.then(celebrityFromDB => {
			console.log(celebrityFromDB)
			res.render('celebrities/show', { celebrity: celebrityFromDB })
		})
		.catch(err => next(err))
})


router.get('/celebrities/edit/:id', (req, res, next) => {
	const id = req.params.id
	Celebrity.findById(id)
		.then(celebrityFromDB => {
			res.render('celebrities/edit', { celebrity: celebrityFromDB })
		})
		.catch(err => next(err))
});



router.post('/celebrities/:id', (req, res, next) => {
	const { name, occupation, catchPhrase } = req.body
	
	Celebrity.findByIdAndUpdate(req.params.id, {
		name,
		occupation,
		catchPhrase
	}, { new: true })
		.then(editedCelebrity => {
			console.log(editedCelebrity)
			res.redirect(`/celebrities/$editedCelebrity._id}`)
		})
});


router.post('/celebrities/delete/:id', (req, res, next) => {
	const id = req.params.id
	Celebrity.findByIdAndDelete(id)
		.then(deletedCelebrity => {
			console.log(deletedCelebrity)
			res.redirect('/celebrities')
		})
		.catch(err => next(err))
});


module.exports = router;