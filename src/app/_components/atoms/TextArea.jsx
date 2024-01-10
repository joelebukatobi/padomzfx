export const TextArea = ({
  children,
  className,
  name,
  id,
  placeholder,
  value,
  required,
  ...props
}) => {
  return (
    <textarea
      required={required}
      value={value}
      id={id}
      name={name}
      placeholder={placeholder}
      className={className}
      {...props}
    >
      {children}
    </textarea>
  );
};
