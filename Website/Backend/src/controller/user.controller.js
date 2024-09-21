import { asyncHandler } from "../utils/asyncHandker.utils.js";
import { apiError } from "../utils/apiError.utils.js";
import { apiResponse } from "../utils/apiResponse.utils.js";
import dotenv from "dotenv";

// all model
import { Disaster } from "../models/disaster.model.js";

dotenv.config();

// all disaster controller

const disasterEntry = asyncHandler(async (req, res) => {
  const { typeofDisaster, level, status, info, place } = req.body;

  if (typeofDisaster.trim() == "") {
    throw new apiError(400, "type is required!");
  }

  if (level.trim() == "") {
    throw new apiError(400, "level is required!");
  }

  if (status.trim() == "") {
    throw new apiError(400, "status is required!");
  }

  if (info.trim() == "") {
    throw new apiError(400, "info is required!");
  }

  if (place.trim() == "") {
    throw new apiError(400, "place is required!");
  }

  const createdDisaster = await Disaster.create({
    typeofDisaster,
    level,
    status,
    info,
    place,
  });

  if (!createdDisaster) {
    throw new apiError(
      500,
      "Something gone wrong while creating of disaster !",
    );
  }

  res
    .status(200)
    .json(
      new apiResponse(
        200,
        { createdDisaster },
        "Diasater  created successfully.",
      ),
    );
});

const allDisaster = asyncHandler(async (req, res) => {
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

const disasterStatusUpdate = asyncHandler(async (req, res) => {
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

const disasterDelete = asyncHandler(async (req, res) => {
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

export { disasterEntry, disasterStatusUpdate, disasterDelete, allDisaster };
