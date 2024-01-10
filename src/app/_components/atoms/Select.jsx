//
export const Select = ({ name, id, children, value, ...props }) => {
  return (
    <div className="select">
      <select name={name} id={id} {...props}>
        {children}
      </select>
      <svg>
        <use href={`/images/sprite.svg#icon-caret`} />
      </svg>
    </div>
  );
};
