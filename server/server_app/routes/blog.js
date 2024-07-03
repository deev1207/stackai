var express = require('express');
var router = express.Router();
const blog_controller = require('../controllers/blog_controller')
/* GET users listing. */
router.get('/', blog_controller.getBlogs);

router.post('/', blog_controller.createBlog);


module.exports = router;
