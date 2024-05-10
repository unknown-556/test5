import express from "express";
const router = express.Router()
import { signUp,signIn } from "./userController.js";
import {driversignUp, driversignIn} from "./driverController.js"
import imageRouter from './driverdatacontroller.js'
import imageRouter2 from './driverdatacontroller2.js'
import imageRouter3 from './driverdatacontroller3.js'


router.post("/register",signUp)
router.post("/login", signIn)
router.post("register", driversignUp)
router.post("/login", driversignIn)


router.post("/register",imageRouter)
router.post("/register",imageRouter2)
router.post("/register",imageRouter3)

export default router;

