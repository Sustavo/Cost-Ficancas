import styles from './Select.module.css'

function Select ( { text, name, options, handleOnChange, value, required} ) {
    return(
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}: </label>
            <select 
                required={required}
                name={name} 
                id={name} 
                onChange={handleOnChange} 
                value={value || ''}
            >
                <option value="">Selecione Uma opção</option>
                {options.map((option) => (
                    <option 
                    value={option.id} 
                    key={option.id}>{option.name}</option>
                ))}
                </select>
        </div>
    )
}

export default Select