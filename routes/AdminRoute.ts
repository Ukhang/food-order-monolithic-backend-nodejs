import express, { NextFunction, Request, Response } from "express";
import { CreateVendor, GetVendorById, GetVendors } from "../controllers";

const router = express.Router();

router.post("/vendor", async (req, res, next) => {
  try {
    await CreateVendor(req, res, next);
  } catch (error) {
    next(error);
  }
});
router.get("/vendors", async (req, res, next) => {
  try {
    await GetVendors(req, res, next);
  } catch (error) {
    next(error);
  }
});
router.get("/vendor/:id", async (req, res, next) => {
    try {
      await GetVendorById(req, res, next);
    } catch (error) {
      next(error);
    }
});

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json({ message: "Hello from admin" });
});

export { router as AdminRoute };
