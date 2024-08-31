// src/components/ui/InputField.tsx

interface InputFieldProps {
    label: string;
    name: string; 
    type?: string;
    placeholder?: string;
    value: string;
    required?: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
    label,
    name,
    type = 'text',
    placeholder,
    value,
    required = false,
    onChange,
}) => {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2 text-sm font-semibold text-stone-800">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                className="p-2 border border-gray-300 rounded"
            />
        </div>
    );
};

export default InputField;
