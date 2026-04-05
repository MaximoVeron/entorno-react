export const NoteCard = ({ title, author, content, key }) => {
  return (
    <div>
      <div key={key}>
        <h2>{title}</h2>
        <small>{author}</small>
      </div>
      <div>
        <p>{content}</p>
      </div>
    </div>
  );
};
