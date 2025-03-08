import { Request, Response, NextFunction } from "express";
import { VendorLoginInput } from "../dto";
import { FindVendor } from "./AdminController";
import { ValidatePassword } from "../utility";

export const VendorLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = <VendorLoginInput>req.body;

    const existingVendor = await FindVendor('', email);

    if (existingVendor !== null) {
        const validation = await ValidatePassword(password, existingVendor.password, existingVendor.salt);

        if (validation) {
            return res.json(existingVendor);
        } else {
            return res.json({ "message": "Password is not valid" });
        }
    };

    return res.status(401).json({ message: "Login credential not valid!" });
};