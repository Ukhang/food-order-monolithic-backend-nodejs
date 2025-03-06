import { Request, Response, NextFunction } from "express";
import { CreateVendorInput } from "../dto";
import { Vendor } from "../models";

export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, address, pinCode, foodType, password, ownerName, phone } = <CreateVendorInput>req.body;

    const existingVendor = await Vendor.findOne({ email });

    if (existingVendor !== null) {
        res.status(400).json({
            message: `A Vendor already exists with the email ID: ${existingVendor.email}`
        });
    };

    // generate the salt

    // Encrypt the password

    const createdVendor = await Vendor.create({
        name: name,
        address: address,
        pinCode: pinCode,
        foodType: foodType,
        email: email,
        password: password,
        salt: '123',
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: [],
    });

    res.status(201).json(createdVendor);
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