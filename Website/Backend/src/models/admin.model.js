import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const adminSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, "password is requried"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true },
);

// used for mongodb aggregate pipeline
adminSchema.plugin(mongooseAggregatePaginate);

// genrate access token
adminSchema.methods.genrateAccessToken = function () {
  // short live token
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    },
  );
};

// genrate refresh token
adminSchema.methods.genrateRefreshToken = function () {
  // short live token
  return jwt.sign(
    {
      _id: this._id,
      username: this.username,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    },
  );
};

export const Admin = mongoose.model("Admin", adminSchema);
