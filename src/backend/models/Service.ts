import mongoose, { Schema, Document } from "mongoose";

export interface IService extends Document {
  title: string;
  providerName: string;
  providerId: mongoose.Types.ObjectId;
  rating: number;
  reviewCount: number;
  priceRange: string;
  imageSrc: string;
  category: string;
  description: string;
  location: string;
  deliveryTime: string;
  images: string[];
  features: string[];
  isPopular: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    providerName: { type: String, required: true },
    providerId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    priceRange: { type: String, required: true },
    imageSrc: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    deliveryTime: { type: String, required: true },
    images: [{ type: String }],
    features: [{ type: String }],
    isPopular: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.models.Service ||
  mongoose.model<IService>("Service", ServiceSchema);
