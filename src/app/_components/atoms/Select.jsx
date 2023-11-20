//
export const Select = ({ name, id, children }) => {
  return (
    <div className="select">
      <select name={name} id={id}>
        {children}
      </select>
    </div>
  );
};
