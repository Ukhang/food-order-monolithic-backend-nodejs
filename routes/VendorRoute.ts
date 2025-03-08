import express, { Request, Response, NextFunction } from "express";
import { GetVendorProfile, UpdateVendorProfile, UpdateVendorService, VendorLogin } from "../controllers";

const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    await VendorLogin(req, res, next);
  } catch (error) {
    next(error);
  }
});
router.get("/profile", async (req, res, next) => {
  try {
    await GetVendorProfile(req, res, next);
  } catch (error) {
    next(error);
  }
});
router.patch("/profile", async (req, res, next) => {
  try {
    await UpdateVendorProfile(req, res, next);
  } catch (error) {
    next(error);
  }
});
router.patch("/service", async (req, res, next) => {
  try {
    await UpdateVendorService(req, res, next);
  } catch (error) {
    next(error);
  }
});

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello from vendor" });
});

export { router as VendorRoute };
