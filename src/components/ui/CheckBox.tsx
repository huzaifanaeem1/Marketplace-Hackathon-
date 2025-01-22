export const Checkbox = ({
    id,
    label,
    checked,
    onChange,
  }: {
    id: string;
    label: string;
    checked?: boolean;
    onChange?: () => void;
  }) => (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        className="rounded text-[#029FAE]"
      />
      <label htmlFor={id} className="text-sm text-gray-600">
        {label}
      </label>
    </div>
  );