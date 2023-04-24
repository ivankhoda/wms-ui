import React from 'react';
import {useTranslation} from 'react-i18next';
import './Header.style.scss';

export const Header = ():JSX.Element => {
    const {t} = useTranslation();

    return (
        <header className="header">
            <nav className="header__menu" />
            <div className="header__search">
                <input
                    className="header__search__input"
                    type="text"
                    placeholder={t('search')}
                />
                <button type="submit" className="header__search__button">
                    {t('find')}
                </button>
            </div>
        </header>
    );
};
