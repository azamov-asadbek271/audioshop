function FormInput({ name, type, label, size }) {
  return (
    <div className="form-control">
      <label className=" w-full">
        <div className="label">
          <span className="label-text capitalize">{label}</span>
        </div>
        <input
          name={name}
          type={type}
          placeholder="Type here"
          className={`input input-bordered w-[400px] max-w-lg `}
        />
      </label>
    </div>
  );
}

export default FormInput;
