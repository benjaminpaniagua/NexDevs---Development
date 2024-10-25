import PropTypes from 'prop-types';

export function FormInput({ type, name, title, minLength, maxLength, value, onChange, className, id, placeholder }) {
    return (
        <>
            <label className="text-fs-small">{title}</label>
            <input id={id} type={type} name={name} minLength={minLength} maxLength={maxLength} value={value} placeholder={placeholder} onChange={onChange} required className={className} />
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

export function FormSelectSpecial({ name, title, value, onChange, options, className, id, type, required }) {
    return (
        <>
            <label className="text-fs-small">{title}</label>
            <select id={id} name={name} value={value} onChange={onChange} required={required} className={className}>
                <option value="" disabled hidden>
                    Seleccione una {type}
                </option>
                {options.map((option, index) => (
                    <option key={index} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </>
    );
}
FormInput.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
};
FormTextArea.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    minLength: PropTypes.number,
    maxLength: PropTypes.number,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    maxLenght: PropTypes.number
};

FormSelect.propTypes = {
    name: PropTypes.string.isRequired,  
    title: PropTypes.string.isRequired,      
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
};

FormSelectSpecial.propTypes = {
    name: PropTypes.string.isRequired,  
    title: PropTypes.string.isRequired,      
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    required: PropTypes.bool,
};