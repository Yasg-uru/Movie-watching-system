const express=require('express')
const router=express.Router();
const upload=require('../middleware/multer.js')
const {createuser, loginuser, getdetail, logout, forgotpassword, resetpassword, updatepassword, getalluser, getsingleuser, updateuserprofile, updateuserrole, deleteuser, savemovie, getallsavedmovies}=require('../controllers/usercontroller.js');
const { isauthenicated, authorization } = require('../middleware/auth.js');
router.route('/register').post(upload.single('profile'),createuser);
router.route('/login').post(loginuser)
router.route('/me').get(isauthenicated,getdetail);
router.route('/logout').post(logout);

router.route('/password/forgot').post(forgotpassword)

router.route('/password/reset/:token').post(resetpassword);
router.route('/update/password').post(isauthenicated,updatepassword);


// router.route('/getalluser').get(getalluser);
// router.route('/getalluser').get(getalluser);
router.route('/getalluser').get(isauthenicated,authorization('admin'),getalluser);

router.route('/getsingleuser/:id').get(isauthenicated, authorization('admin'),getsingleuser);
router.route('/update/profile/:id').post(isauthenicated,authorization('admin'),updateuserprofile);

router.route('/update/role/:id').post(isauthenicated,authorization('admin'),updateuserrole);

// router.route('/delete/user/:id').delete(deleteuser);
router.route('/delete/user/:id').delete(isauthenicated,authorization('admin'),deleteuser);

router.route('/savemovie/:id').post(isauthenicated,savemovie);
router.route('/getallsavedmovie').get(isauthenicated,getallsavedmovies)

module.exports=router;
