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

      lowercase: true,
    },
    info: {
      type: String,
      trim: true,

      lowercase: true,
    },
    place: {
      type: String,
      trim: true,

      lowercase: true,
    },
  },
  { timestamps: true },
);

disasterSchema.plugin(mongooseAggregatePaginate);

export const Disaster = mongoose.model("Disaster", disasterSchema);
