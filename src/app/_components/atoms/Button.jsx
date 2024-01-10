//
export const Button = ({
  className,
  children,
  disabled,
  type,
  onClick,
  id,
}) => {
  return (
    <button
      className={className}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
