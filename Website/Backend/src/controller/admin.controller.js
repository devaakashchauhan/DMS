import { asyncHandler } from "../utils/asyncHandker.utils.js";
import { apiError } from "../utils/apiError.utils.js";
import { apiResponse } from "../utils/apiResponse.utils.js";
import dotenv from "dotenv";

// all model
import { Admin } from "../models/admin.model.js";
import { Disaster } from "../models/disaster.model.js";
import { DisasterType } from "../models/disasterType.model.js";
import { Status } from "../models/status.model.js";
import { Level } from "../models/level.model.js";

dotenv.config();

// guest genrate refresh and access token
const genrateAccessAndRefreshToken = async (guestId) => {
  try {
    const admin = await Admin.findById(guestId);
    if (!admin) {
      throw new apiError(400, "Invalid guest user !");
    }
    const accessToken = admin.genrateAccessToken();
    const refreshToken = admin.genrateRefreshToken();

    admin.refreshToken = refreshToken;
    await admin.save({ validateBeforeSave: false });
    return { accessToken, refreshToken };
  } catch (error) {
    throw new apiError(
      500,
      "Somthing went wrong while generating accessToken And refreshToken for admin !",
    );
  }
};

//guest login
const loginAdmin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    throw new apiError(400, "username is requried !");
  }
  if (!password) {
    throw new apiError(400, "password is requried !");
  }

  const findAdmin = await Admin.findOne({ username });

  if (!findAdmin) {
    throw new apiError(400, "invalid username");
  }

  const isPasswordValid = await findAdmin.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new apiError(401, "Invalid password");
  }

  const { accessToken, refreshToken } = await genrateAccessAndRefreshToken(
    findAdmin._id,
  );

  const loggedInAdmin = await Admin.findById(findAdmin._id).select(
    "-password,-refreshToken",
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new apiResponse(
        200,
        { admin: loggedInAdmin, accessToken, refreshToken },
        "admin Logged In successfully.",
      ),
    );
});

//guest logout
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

// get current guest
const getCurrentAdmin = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new apiResponse(200, req.admin, "Current admin details"));
});

// all disaster controller

const disasterType = asyncHandler(async (req, res) => {
  const { type, des } = req.body;

  if (type.trim() == "") {
    throw new apiError(400, "type is required!");
  }

  if (des.trim() == "") {
    throw new apiError(400, "des is required!");
  }

  const existType = await DisasterType.findOne({ disasterType: type });

  if (existType) {
    throw new apiError(400, `${type} is already have!`);
  }

  const createdType = await DisasterType.create({
    disasterType: type,
    des: des,
  });

  if (!createdType) {
    throw new apiError(
      500,
      "Something gone wrong while creating type of disaster !",
    );
  }

  res
    .status(200)
    .json(new apiResponse(200, {}, "Diasater type created successfully."));
});

const statusType = asyncHandler(async (req, res) => {
  const { status, des } = req.body;

  if (status.trim() == "") {
    throw new apiError(400, "status is required!");
  }

  if (des.trim() == "") {
    throw new apiError(400, "des is required!");
  }

  const existStatus = await Status.findOne({ status: status });

  if (existStatus) {
    throw new apiError(400, `${status} is already have!`);
  }

  const createdStatus = await Status.create({
    status: status,
    des: des,
  });

  if (!createdStatus) {
    throw new apiError(
      500,
      "Something gone wrong while creating type of status !",
    );
  }

  res
    .status(200)
    .json(new apiResponse(200, {}, "Diasater status created successfully."));
});

const levelType = asyncHandler(async (req, res) => {
  const { level, des } = req.body;

  if (level.trim() == "") {
    throw new apiError(400, "level is required!");
  }

  if (des.trim() == "") {
    throw new apiError(400, "des is required!");
  }

  const existLevel = await Level.findOne({ level: level });

  if (existLevel) {
    throw new apiError(400, `${level} is already have!`);
  }

  const createdLevel = await Level.create({
    level: level,
    des: des,
  });

  if (!createdLevel) {
    throw new apiError(
      500,
      "Something gone wrong while creating type of level !",
    );
  }

  res
    .status(200)
    .json(new apiResponse(200, {}, "Diasater level created successfully."));
});

const getAllDisaster = asyncHandler(async (req, res) => {});
const deleteDisaster = asyncHandler(async (req, res) => {});
const updateStatus = asyncHandler(async (req, res) => {});

export {
  loginAdmin,
  logoutAdmin,
  getCurrentAdmin,
  getAllDisaster,
  deleteDisaster,
  updateStatus,
  disasterType,
  statusType,
  levelType,
};
