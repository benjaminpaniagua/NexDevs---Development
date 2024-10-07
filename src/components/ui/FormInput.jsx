export function FormInput({ type, name, title, minLength, maxLength, value, onChange, className, id }) {
    return (
        <>
            <label className="text-fs-small">{title}</label>
            <input id={id} type={type} name={name} minLength={minLength} maxLength={maxLength} value={value} onChange={onChange} required className={className} />
        </>
    );
}

export function FormTextArea({ name, title, minLength, maxLenght, value, onChange, className, id }) {
    return (
        <>
            <label className="text-fs-small">{title}</label>
            <textarea id={id} name={name} minLength={minLength} maxLength={maxLenght} value={value} onChange={onChange} required className={className} />
        </>
    );
}

export function FormSelect({ name, title, value, onChange, options, className, id }) {
    return (
        <>
            <label className="text-fs-small">{title}</label>
            <select id={id} name={name} value={value} onChange={onChange} required className={className}>
                <option value="" disabled hidden>
                    Seleccione una {title}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>
        </>
    );
}