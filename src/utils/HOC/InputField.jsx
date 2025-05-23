const InputField = ({ icon, type, name, value, placeholder, onChange }) => (
  <div className="flex items-center gap-3 bg-white py-4 px-4 rounded-3xl shadow-sm">
    <p className="text-gray-400">{icon}</p>
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full border-none outline-none text-lg font-medium text-slate-500"
      required
    />
  </div>
);

export default InputField;
