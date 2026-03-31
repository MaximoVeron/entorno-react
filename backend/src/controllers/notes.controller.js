import { NotesModel } from "../models/notes.model.js";

export const createNote = async (req, res) => {
  try {
    const newNote = await NotesModel.create();
    return res
      .status(200)
      .json({ ok: true, msg: "Nota creada", Note: newNote });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ ok: false, msg: "Problema interno del servidor" });
  }
};

export const getNotes = async (req, res) => {
  try {
    const allNotes = await NotesModel.find();
    if (!allNotes)
      return res.status(200).json({ ok: true, msg: "Aun no hay notas" });
    return res
      .status(200)
      .json({ ok: true, msg: "Notas encontradas", notes: allNotes });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ ok: false, msg: "Problema interno del servidor" });
  }
};

export const getNote = async (req, res) => {
  const { title } = req.body;
  try {
    const note = await NotesModel.findOne({ title });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ ok: false, msg: "Problema interno del servidor" });
  }
};

export const updateNote = async (req, res) => {
  const { id } = req.params.id;
  try {
    const updatedNote = await NotesModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res
      .status(200)
      .json({ ok: true, msg: "Nota actualizada", note: updatedNote });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ ok: false, msg: "Problema interno del servidor" });
  }
};

export const deleteNote = async (req, res) => {
  try {
    await NotesModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ ok: true, msg: "Nota eliminada" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ ok: false, msg: "Problema interno del servidor" });
  }
};
