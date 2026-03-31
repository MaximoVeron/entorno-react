export const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded bg-blue-500 text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
