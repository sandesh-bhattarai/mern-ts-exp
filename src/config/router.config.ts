import { NextFunction, Router, Request, Response } from "express";
import UserModel from "../modules/user/user.model";
import { UUIDV4 } from "sequelize";

const router = Router();


router.use("/",async (req: Request, res: Response, next: NextFunction) => {

    const user = UserModel.build({
        name: "Sandesh Bhattarai",
        email: "sandesh@broadwayinfosys.com"
    })

    await user.save()
    res.json({
        result: user,
        message: "API Called successfully",
        meta: null
    })
})
export default router;
