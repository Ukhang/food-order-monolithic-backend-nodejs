import { Request, Response, NextFunction } from "express";
import { CreateVendorInput } from "../dto";

export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, address, pinCode, foodType, password, ownerName, phone } = <CreateVendorInput>req.body;
    res.status(201).json({ name, email, address, pinCode, foodType, password, ownerName, phone });
};

export const GetVendors = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(201).json({ message: "ভেন্ডর সফলভাবে তৈরি হয়েছে" });
    } catch (error) {
        next(error);
    }
};

export const GetVendorById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(201).json({ message: "ভেন্ডর সফলভাবে তৈরি হয়েছে" });
    } catch (error) {
        next(error);
    }
};