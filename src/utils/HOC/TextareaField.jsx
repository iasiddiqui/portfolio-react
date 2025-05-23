const TextareaField = ({ name, value, placeholder, onChange }) => (
  <div className="bg-white py-4 px-4 rounded-3xl shadow-sm">
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full h-32 resize-none border-none outline-none text-lg font-medium text-slate-500"
      required
    />
  </div>
);

export default TextareaField;
