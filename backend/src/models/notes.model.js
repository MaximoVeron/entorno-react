import { model, Schema } from "mongoose";

const NotesSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      maxlength: [50, "El limite de caracteres es de 50"],
      trim: true,
      lowercase: true,
    },
    content: {
      type: String,
      minlength: [10, "El minimo de caracteres es de 50"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

export const NotesModel = model("Notes", NotesSchema);
