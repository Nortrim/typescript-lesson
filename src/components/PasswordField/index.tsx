import React, {useState} from "react";
import './style.css';

interface IPasswordInput {
    value: string,
    onChange: (value: string) => void,
    label?: string,
    placeholder?: string,
}

export const PasswordInput: React.FC<IPasswordInput> = ({
                                                            label,
                                                            value,
                                                            onChange,
                                                            placeholder,
                                                        }) => {
    const [isPasswordVisible, setPasswordVisible] = useState<boolean>(false)

    return (
        <div className="container">
            <label>
                <p className="labelText">{label}</p>
                <input
                    className="input"
                    type={isPasswordVisible ? "text" : "password"}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => {
                        onChange(e.target.value)
                    }}
                />
            </label>
            <button onClick={() => setPasswordVisible(prev => !prev)}>
                {`${isPasswordVisible ? 'Close' : 'Show'} password`}
            </button>
        </div>
    )
}
