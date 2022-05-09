const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController');

// let rbpizzas = new Post ({
//     nome: 'Matheus',
//     sabor: 'Mussarela',
//     quantidade: 2,
//     data: '06/05/2022'

// });

// rbpizzas.save().then(doc => {
//     console.log(doc);
// }).catch(err => {
//     console.log(err);
// })


router.get('/', (req, res) => {
    res.render('pages/index')
})

router.get('/encomendas', (req, res) => {
    res.render('pages/encomendas', { error: false, body: {} } )
})

router.get('/registros', postController.allPosts, (req, res) => {
    res.render('pages/registros')
})

router.post('/registros', express.urlencoded({extended: true}), postController.nOrder);

router.delete('/:id', express.urlencoded({extended: true}), postController.deletePost);

module.exports = router;