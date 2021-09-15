export const Input = ({ label, id, angle, ...props }) => {
  return (
    <div className="input_container">
      <label className="label" htmlFor={id}>
        {label}
      </label>
      <input className="input" id={id} type="number" {...props} />
    </div>
  );
};

export const InputRadio = ({ label, id, ...props }) => {
  return (
    <div className="input_container" style={{ marginTop: "0.5rem" }}>
      <label className="input-radio">
        <input className="input-radio" id={id} type="radio" {...props} />
        {label}
      </label>
    </div>
  );
};
