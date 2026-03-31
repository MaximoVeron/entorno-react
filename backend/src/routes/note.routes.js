import { Router } from "express";
import {
  createNote,
  deleteNote,
  getNote,
  getNotes,
  updateNote,
} from "../controllers/notes.controller.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

export const noteRouter = Router();
noteRouter.post("/notes", authMiddleware, createNote);
noteRouter.get("/notes", authMiddleware, getNotes);
noteRouter.get("/notes/:id", authMiddleware, getNote);
noteRouter.put("/note/:id", authMiddleware, updateNote);
noteRouter.delete("/note/:id", authMiddleware, deleteNote);
