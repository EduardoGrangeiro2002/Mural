const express = require('express');
const router = express.Router()
const posts = require("../model/posts")
const cors = require('cors');
const { application } = require('express');

const options = {
    origin:"http://localhost:5000"
}

router.use(cors(options))

router.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
})


router.post('/new',express.json(), (req, res) => {
    
    let title = req.body.title;
    let description = req.body.description;

    posts.getNew(title, description)
    
    res.send('Post adicionado com sucesso')

})


router.delete('/del', express.json(), (req, res)=> {
    let id = req.body.id
    posts.deletePost(id);
      res.send('Post deletado com sucesso');

})


module.exports = router