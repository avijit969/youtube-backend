import { Router } from "express";
import {
     loginUser, 
     logoutUser,
     registerUser,
     refreshAccessToken, 
     changeCurrentPassword, 
     getCurrentUser,
     updateAccountDetails,
     updateUserAvatar,
     updateUsercoverImage,
     getUserChannelProfile,
     getWatchHistory
    } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
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
router.route("/logout").post(verifyJWT,logoutUser)
router.route("/refresh-token").post(refreshAccessToken)
router.route("/cahnge-password").patch(verifyJWT,changeCurrentPassword)
router.route("/current-user").get(verifyJWT, getCurrentUser)
router.route("/update-account").patch(verifyJWT, updateAccountDetails)
router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar)
router.route("/cover-image").patch(verifyJWT, upload.single("coverImage"), updateUsercoverImage)
router.route("/c/:username").get(verifyJWT, getUserChannelProfile)
router.route("/history").get(verifyJWT, getWatchHistory)
// test rout
router.route("/test").get((req, res) => {
    res.send('hello world')
  })
export default router