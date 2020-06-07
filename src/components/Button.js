import React from 'react';

//styles
import './styles/Button.css';

export default function Button({ buttonText }) {
    return (
        <button className="default-button">
            {buttonText}
        </button>
    )
}