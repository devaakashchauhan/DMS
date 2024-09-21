import jwt from "jsonwebtoken";
import { apiError } from "../utils/apiError.utils.js";
import { asyncHandler } from "../utils/asyncHandker.utils.js";
import { Admin } from "../models/admin.model.js";

const verifyJWTAdmin = asyncHandler(async (req, _, next) => {
  const token = req.cookies.accessToken || req.body.accessToken;

  if (!token) {
    throw new apiError(401, "Unauthorized");
  }

  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const admin = await Admin.findById(decodedToken?._id).select(
      "-password -accessToken -__v -_id -updatedAt -createdAt",
    );

    if (!admin) {
      throw new apiError(401, "Unauthorized");
    }

    req.admin = admin;
    next();
  } catch (error) {
    throw new apiError(
      401,
      `Unauthorized ${error?.message || "Invalid access Token"}`,
    );
  }
});

export { verifyJWTAdmin };
