import { Router } from "express";
import {
  createNote,
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from "../controllers/notes.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { isOwner } from "../middlewares/isOwnMiddleware.js";
import { NotesModel } from "../models/notes.model.js";

export const noteRouter = Router();
noteRouter.post("/notes", authMiddleware, createNote);
noteRouter.get("/notes", authMiddleware, getNotes);
noteRouter.get("/notes/:id", authMiddleware, getNote);
noteRouter.put("/notes/:id", authMiddleware, isOwner(NotesModel), updateNote);
noteRouter.delete(
  "/notes/:id",
  authMiddleware,
  isOwner(NotesModel),
  deleteNote,
);
