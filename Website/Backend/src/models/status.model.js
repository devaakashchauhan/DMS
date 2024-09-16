import mongoose, { Schema, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const statusSchema = new Schema(
  {
    status: {
      type: String,
      trim: true,
    },
    des: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true },
);

statusSchema.plugin(mongooseAggregatePaginate);

export const Status = mongoose.model("Status", statusSchema);
