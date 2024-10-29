import { Router } from "express";
import {
  saveAddress,
  getCurrentAddress,
  getSavedAddresses
} from "../controllers/addressController";
import { protect } from "../controllers/authController";

const router = Router();

router.post("/saveAddress", protect, saveAddress);

router.get("/getCurrentAddress", protect, getCurrentAddress);

router.get('/getSavedAddresses', protect, getSavedAddresses)

export default router;
