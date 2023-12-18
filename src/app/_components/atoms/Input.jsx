export const Input = ({ type, placeholder, name, value, id, required, disabled }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      id={id}
      required={required}
      disabled={disabled}
    />
  );
};
