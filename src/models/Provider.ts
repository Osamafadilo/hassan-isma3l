import mongoose, { Schema, Document } from "mongoose";

export interface IProvider extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  image: string;
  coverImage: string;
  rating: number;
  reviewCount: number;
  location: string;
  categories: string[];
  isVerified: boolean;
  completedProjects: number;
  description: string;
  contactInfo: {
    email: string;
    phone: string;
    website?: string;
    workingHours: string;
  };
  stats: {
    completedProjects: number;
    activeProjects: number;
    clientsServed: number;
    responseRate: string;
    responseTime: string;
  };
  gallery: string[];
  createdAt: Date;
  updatedAt: Date;
}

const ProviderSchema: Schema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    coverImage: { type: String, required: true },
    rating: { type: Number, default: 0 },
    reviewCount: { type: Number, default: 0 },
    location: { type: String, required: true },
    categories: [{ type: String }],
    isVerified: { type: Boolean, default: false },
    completedProjects: { type: Number, default: 0 },
    description: { type: String, required: true },
    contactInfo: {
      email: { type: String, required: true },
      phone: { type: String, required: true },
      website: { type: String },
      workingHours: { type: String, required: true },
    },
    stats: {
      completedProjects: { type: Number, default: 0 },
      activeProjects: { type: Number, default: 0 },
      clientsServed: { type: Number, default: 0 },
      responseRate: { type: String, default: "0%" },
      responseTime: { type: String, default: "N/A" },
    },
    gallery: [{ type: String }],
  },
  { timestamps: true },
);

export default mongoose.models.Provider ||
  mongoose.model<IProvider>("Provider", ProviderSchema);
