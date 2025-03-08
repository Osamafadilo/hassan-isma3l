import mongoose, { Schema, Document } from "mongoose";

export interface ICategory extends Document {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  titleAr: string;
  descriptionAr: string;
  createdAt: Date;
  updatedAt: Date;
}

const CategorySchema: Schema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageSrc: { type: String, required: true },
    titleAr: { type: String, required: true },
    descriptionAr: { type: String, required: true },
  },
  { timestamps: true },
);

export default mongoose.models.Category ||
  mongoose.model<ICategory>("Category", CategorySchema);
