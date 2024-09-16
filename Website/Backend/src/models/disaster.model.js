import mongoose, { Schema, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const disasterSchema = new Schema(
  {
    typeofDisaster: {
      type: Schema.Types.ObjectId,
      ref: "DisasterType",
    },
    level: {
      type: Schema.Types.ObjectId,
      ref: "Level",
    },
    status: {
      type: Schema.Types.ObjectId,
      ref: "Status",
    },
    info: {
      type: String,
      trim: true,
    },
    place: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

disasterSchema.plugin(mongooseAggregatePaginate);

export const Disaster = mongoose.model("Disaster", disasterSchema);
