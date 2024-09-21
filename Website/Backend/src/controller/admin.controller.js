import { asyncHandler } from "../utils/asyncHandker.utils.js";
import { apiError } from "../utils/apiError.utils.js";
import { apiResponse } from "../utils/apiResponse.utils.js";
import dotenv from "dotenv";

import { Admin } from "../models/admin.model.js";
import { Disaster } from "../models/disaster.model.js";

dotenv.config();

const genrateAccessAndRefreshToken = async (admintId) => {
  try {
    const admin = await Admin.findById(admintId);
    if (!admin) {
      throw new apiError(400, "Invalid admin!");
    }
    const accessToken = admin.genrateAccessToken();

    admin.accessToken = accessToken;
    await admin.save({ validateBeforeSave: false });
    return accessToken;
  } catch (error) {
    throw new apiError(
      500,
      "Somthing went wrong while generating accessToken And refreshToken for admin !",
    );
  }
};

const loginAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    throw new apiError(400, "username is requried !");
  }
  if (!password) {
    throw new apiError(400, "password is requried !");
  }

  const findAdmin = await Admin.findOne({
    username,
    password,
  });

  if (!findAdmin) {
    throw new apiError(400, "invalid username");
  }

  const accessToken = await genrateAccessAndRefreshToken(findAdmin._id);

  const loggedInAdmin = await Admin.findById(findAdmin._id).select("-password");

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)

    .json(
      new apiResponse(
        200,
        { admin: loggedInAdmin },
        "admin Logged In successfully.",
      ),
    );
});

const logoutAdmin = asyncHandler(async (req, res) => {
  const admin = await Admin.findByIdAndUpdate(
    req.admin._id,
    {
      $set: {
        refreshToken: undefined,
      },
    },
    {
      new: true,
    },
  );

  const option = {
    httpOnly: true,
    secure: process.env.NODE_ENV == "development",
  };

  return res
    .status(200)
    .clearCookie("accessToken", option)
    .clearCookie("refreshToken", option)
    .json(new apiResponse(200, {}, "user logout successfully !"));
});

const getCurrentAdmin = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new apiResponse(200, req.admin, "Current admin details"));
});

// all disaster controller
const getAllDisaster = asyncHandler(async (req, res) => {
  const allDisaster = await Disaster.find();

  if (!allDisaster) {
    throw new apiError(500, "Something gone wrong while featch of disaster !");
  }

  res
    .status(200)
    .json(
      new apiResponse(200, { allDisaster }, "All Diasater get successfully."),
    );
});

const deleteDisaster = asyncHandler(async (req, res) => {
  const { disasterId } = req.body;

  if (disasterId.trim() == "") {
    throw new apiError(400, "disaster Id is required!");
  }

  const existDisaster = await Disaster.findById(disasterId);

  if (!existDisaster) {
    throw new apiError(400, "Invalid disaster!");
  }

  const deletedDisaster = await Disaster.findByIdAndDelete(disasterId);

  if (!deletedDisaster) {
    throw new apiError(
      500,
      "Something gone wrong while deleting of disaster !",
    );
  }

  res
    .status(200)
    .json(new apiResponse(200, {}, "Diasater  deleting successfully."));
});

const updateStatus = asyncHandler(async (req, res) => {
  const { disasterId, status } = req.body;

  if (disasterId.trim() == "") {
    throw new apiError(400, "disaster Id is required!");
  }
  if (status.trim() == "") {
    throw new apiError(400, "disaster status is required!");
  }

  const existDisaster = await Disaster.findById(disasterId);

  if (!existDisaster) {
    throw new apiError(400, "Invalid disaster!");
  }

  const deletedDisaster = await Disaster.findByIdAndUpdate(
    disasterId,
    {
      $set: {
        status,
      },
    },
    { new: true },
  );

  if (!deletedDisaster) {
    throw new apiError(
      500,
      "Something gone wrong while updating status of disaster !",
    );
  }

  res
    .status(200)
    .json(new apiResponse(200, {}, "Diasater status updated successfully."));
});

export {
  loginAdmin,
  logoutAdmin,
  getCurrentAdmin,
  getAllDisaster,
  deleteDisaster,
  updateStatus,
};
