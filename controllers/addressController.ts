import catchAsync from "../utils/catchAsync";
import { Request, Response } from "express";
import Address, { IAddress } from "../model/addressModal";
import mongoose from "mongoose";

interface CustomRequest extends Request {
  user?: {
    id: string;
  };
}

export const saveAddress = catchAsync(
  async (req: CustomRequest, res: Response) => {
    console.log(req.body);
    const address: IAddress = req.body;
    address.userId = new mongoose.Types.ObjectId(req.user?.id || "");
    const newAddress = await Address.create(address);
    console.log(newAddress);
    res.status(201).json({
      status: "success",
      data: {
        address: newAddress,
      },
    });
  }
);

export const getCurrentAddress = catchAsync(
  async (req: CustomRequest, res: Response) => {
    const currentAddress = await Address.findOne({ userId: req.user?.id });

    if (!currentAddress) {
      return res.status(404).json({
        status: "fail",
        message: "Address not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: "address details available",
    });
  }
);

export const getSavedAddresses = catchAsync(
  async (req: CustomRequest, res: Response) => {
    const currentAddress = await Address.findOne({ userId: req.user?.id });

    if (!currentAddress) {
      return res.status(404).json({
        status: "fail",
        message: "Address not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        currentAddress,
      },
    });
  }
);
