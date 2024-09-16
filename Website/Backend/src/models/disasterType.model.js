import mongoose, { Schema, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const disasterTypeSchema = new Schema(
  {
    disasterType: {
      type: String,
      required: true,
    },
    des: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

disasterTypeSchema.plugin(mongooseAggregatePaginate);

export const DisasterType = mongoose.model("DisasterType", disasterTypeSchema);
