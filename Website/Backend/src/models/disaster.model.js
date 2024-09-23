import mongoose, { Schema, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const disasterSchema = new Schema(
  {
    typeofDisaster: {
      type: String,
      trim: true,

      lowercase: true,
    },
    level: {
      type: String,
      trim: true,

      lowercase: true,
    },
    status: {
      type: String,
      trim: true,
      default: "Submit",
    },
    description: {
      type: String,
      trim: true,

      lowercase: true,
    },
    address: {
      type: String,
      trim: true,
      lowercase: true,
    },
    city: {
      type: String,
      trim: true,
      lowercase: true,
    },
    country: {
      type: String,
      trim: true,
      lowercase: true,
    },
    pincode: {
      type: String,
      trim: true,
      lowercase: true,
    },
  },
  { timestamps: true },
);

disasterSchema.plugin(mongooseAggregatePaginate);

export const Disaster = mongoose.model("Disaster", disasterSchema);
