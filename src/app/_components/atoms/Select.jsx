//
export const Select = ({ name, id, children, value }) => {
  return (
    <div className="select">
      <select name={name} id={id}>
        {children}
      </select>
      <svg>
        <use href={`/images/sprite.svg#icon-caret`} />
      </svg>
    </div>
  );
};
