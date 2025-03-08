import express, { Request, Response, NextFunction } from "express";
import { VendorLogin } from "../controllers";

const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    await VendorLogin(req, res, next);
  } catch (error) {
    next(error);
  }
});

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.json({ message: "Hello from vendor" });
})

export { router as VendorRoute };