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
    const currentAddress = await Address.find({ userId: req.user?.id });

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

export const getAddressDetails = catchAsync(
  async (req: CustomRequest, res: Response) => {
    const addressDetails = await Address.findById(req.params.id);
    res.status(201).json({
      status: "success",
      data: {
        addressDetails,
      },
    });
  }
);
export const updateAddress = catchAsync(
  async (req: CustomRequest, res: Response) => {
    const updatedAddress = await Address.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedAddress) {
      return res.status(404).json({
        status: "fail",
        message: "Address not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        address: updatedAddress,
      },
    });
  }
);

export const deleteAddress = catchAsync(
  async (req: CustomRequest, res: Response) => {
    const deletedAddress = await Address.findByIdAndDelete(req.params.id);

    if (!deletedAddress) {
      return res.status(404).json({
        status: "fail",
        message: "Address not found",
      });
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  }
);