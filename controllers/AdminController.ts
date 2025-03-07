import { Request, Response, NextFunction } from "express";
import { CreateVendorInput } from "../dto";
import { Vendor } from "../models";
import { GeneratePassword, GenerateSalt } from "../utility";

export const CreateVendor = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, address, pinCode, foodType, password, ownerName, phone } = <CreateVendorInput>req.body;

    const existingVendor = await Vendor.findOne({ email });

    if (existingVendor !== null) {
        return res.status(400).json({
            message: `A Vendor already exists with the email ID: ${existingVendor.email}`
        });
    };

    // generate the salt
    const salt = await GenerateSalt();
    const userPassword = await GeneratePassword(password, salt);

    // Encrypt the password
    const createdVendor = await Vendor.create({
        name: name,
        address: address,
        pinCode: pinCode,
        foodType: foodType,
        email: email,
        password: userPassword,
        salt: salt,
        ownerName: ownerName,
        phone: phone,
        rating: 0,
        serviceAvailable: false,
        coverImages: [],
    });

    return res.status(201).json(createdVendor);
};

export const GetVendors = async (req: Request, res: Response, next: NextFunction) => {
    const vendors = await Vendor.find();
    
    if (vendors !== null) {
        return res.status(200).json(vendors);
    }

    return res.status(404).json({ message: "Vendors data not available" });
};

export const GetVendorById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(201).json({ message: "ভেন্ডর সফলভাবে তৈরি হয়েছে" });
    } catch (error) {
        next(error);
    }
};