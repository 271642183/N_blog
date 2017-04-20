var express= require('express');
var router = express.Router();

var checkLogin = require('../middlewares/check').checkLogin;

// GET /signout 登出
router.get('/', checkLogin, function(req, res, next){
	console.log('轻轻地我走了，正如我轻轻地来~');
	//清空 session 中的用户信息
	req.session.user = null;
	console.log('挥一挥衣袖不带走一片云彩》》清除session用户信息');
	req.flash('success','登出成功');
	console.log('成功~跳转主页');
	res.redirect('/posts');

});

module.exports = router;
