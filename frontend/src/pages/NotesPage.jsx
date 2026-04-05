import { useEffect, useState } from 'react';
import { NoteCard } from '../components/NoteCard';
import { Loading } from '../components/Loading';
import axios from 'axios';

export const NotesPage = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
      setLoading(true);
      try {
        const resp = await axios.get('http://localhost:3000/api/notes', { withCredentials: true });
        console.log(resp.data);
        setNotes(resp.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getNotes();
  }, []);
  if (loading === true) return <Loading />;
  if (error) console.log(error);
  return (
    <div>
      <h1>Bienvenido a la seccion de notas</h1>
      <section>
        <div>
          {notes.map((note) => {
            <NoteCard key={note._id} title={note.title} />;
          })}
        </div>
      </section>
    </div>
  );
};
