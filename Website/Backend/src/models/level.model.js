import mongoose, { Schema, Types } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const levelSchema = new Schema(
  {
    level: {
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

levelSchema.plugin(mongooseAggregatePaginate);

export const Level = mongoose.model("Level", levelSchema);
