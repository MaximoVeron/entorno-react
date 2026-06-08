import React, { createContext, useState, useMemo } from "react";

export const NoteContext = createContext();

export const NotesProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: null,
    username: null,
  });

  const data = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user],
  );

  return <NoteContext.Provider value={data}>{children}</NoteContext.Provider>;
};
