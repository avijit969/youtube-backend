import { Router, json } from "express";
import { loginUser, logoutUser, registerUser,refreshAccessToken } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verfyJwt } from "../middlewares/auth.middleware.js";
const router=Router();
router.route("/registerUser").post(
    upload.fields(
        [
            {
                name:"avatar",
                maxCount:1
            },
            {
                name:"coverImage",
                maxCount:1
            }
        ]
    ),
    registerUser
    )
router.route("/login").post(loginUser)
// secure routes
router.route("/logout").post(verfyJwt,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)


// test rout
router.route("/test").get((req, res) => {
    res.send('hello world')
  })
export default router