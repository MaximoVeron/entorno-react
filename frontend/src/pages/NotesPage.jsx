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
      setError(null);
      try {
        const resp = await axios.get('http://localhost:3000/api/auth/notes', {
          withCredentials: true,
        });
        setNotes(resp.data?.notes ?? []);
      } catch (error) {
        setError(error.response?.data?.msg || 'No se pudieron cargar las notas.');
      } finally {
        setLoading(false);
      }
    };
    getNotes();
  }, []);

  if (loading === true) return <Loading />;

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-5xl space-y-6">
        <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/40">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Notas</p>
            <h1 className="text-3xl font-semibold text-slate-900">
              Bienvenido a la sección de notas
            </h1>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              Aquí puedes revisar tus notas y mantenerlas organizadas. Solo verás lo que esté
              asociado a tu sesión activa.
            </p>
          </div>

          {error ? (
            <div className="mt-6 rounded-3xl border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          {!error && notes.length === 0 ? (
            <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-8 text-center text-slate-600">
              Aún no hay notas creadas.
            </div>
          ) : null}
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              title={note.title}
              author={note.author}
              content={note.content}
            />
          ))}
        </div>
      </section>
    </main>
  );
};
