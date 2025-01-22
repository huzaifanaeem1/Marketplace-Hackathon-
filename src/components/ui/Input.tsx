export const InputField = ({
    label,
    name,
    value,
    type,
    placeholder,
    onChange,
    required,
  }: {
    label: string;
    name: string;
    value: string;
    type: string;
    placeholder?: string;
    onChange: (e: any) => void;
    required?: boolean;
  }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2 text-gray-600">
        {label}
      </label>
      <input
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required
        className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#029FAE] hover:shadow-md transition-all"
      />
    </div>
  );