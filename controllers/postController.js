const Post = require('../models/Post');

// const redirect = async (req, res) => {
//     let nome = req.params.nome;
//     try {
//         let doc = await Post.findOne({nome})
//         console.log(doc);
//         res.redirect(sabor)
//     } catch (error){
//         res.send('Houve um erro >', error);
//     }
// }

const nOrder = async (req, res) => {
    
    let post = new Post (req.body)

    try {
        
        let doc = await post.save()
        let posts = await Post.find();
        res.render('pages/registros', { posts });
    } catch (error) {
        render('pages/encomendas', { error, body: req.body });
    }

}

const allPosts = async (req, res) => {
    try{
        let posts = await Post.find();
        res.render('pages/registros', { posts });
    } catch (error) {
        res.render(error);
    }
}


const deletePost = async (req, res ) => {

    let id = req.params.id;
    if (!id){
        id = req.body.id;
    }

    try {
        await Post.findByIdAndDelete(id)
        res.send(id)
    } catch (error) {
        res.status().send(error);
    }
}


module.exports = { nOrder, allPosts, deletePost };