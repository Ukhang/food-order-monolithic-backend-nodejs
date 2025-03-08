import { Request, Response, NextFunction } from "express";
import { VendorLoginInput } from "../dto";
import { FindVendor } from "./AdminController";
import { GenerateSignature, ValidatePassword } from "../utility";

export const VendorLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = <VendorLoginInput>req.body;

    const existingVendor = await FindVendor('', email);

    if (existingVendor !== null) {
        const validation = await ValidatePassword(password, existingVendor.password, existingVendor.salt);

        if (validation) {
            const signature = GenerateSignature({
                _id: existingVendor.id,
                email: existingVendor.email,
                foodTypes: existingVendor.foodType,
                name: existingVendor.name
            });
            res.json(signature);
            return;
        } else {
            res.json({ "message": "Password is not valid" });
            return;
        }
    };

    res.status(401).json({ "message" : "Login credential not valid!" });
    return;
};

export const GetVendorProfile = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user = req.user;

    if (user) {
        const existingVendor = await FindVendor(user._id);
        res.json(existingVendor);
        return;
    };

    res.status(401).json({ "message" : "Vendor information not found" });
    return;
};

export const UpdateVendorProfile = async (req: Request, res: Response, next: NextFunction) => {

};

export const UpdateVendorService = async (req: Request, res: Response, next: NextFunction) => {

};