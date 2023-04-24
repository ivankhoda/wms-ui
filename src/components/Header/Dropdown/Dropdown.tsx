import React from 'react';
import './Dropdown.style.scss';

export const Dropdown = (): JSX.Element => <div className="dropdown">
    <button type="submit" className="dropdown__toggle">
        Dropdown
    </button>
    <ul className="dropdown__menu">
        <li className="dropdown__item">
        </li>
        <li className="dropdown__item">
        </li>
        <li className="dropdown__item">
        </li>
    </ul>
</div>;

