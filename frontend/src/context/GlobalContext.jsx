import React, { createContext, useState } from "react";

export const NoteContext = createContext();

export const NotesProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    username: null,
  });

  const data = {
    user,
    setUser,
  };

  return <NoteContext.Provider value={data}>{children}</NoteContext.Provider>;
};
