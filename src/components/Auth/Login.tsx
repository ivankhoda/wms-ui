import React, {SetStateAction, useState} from 'react';
import {useTranslation} from 'react-i18next';
import './Login.style.scss';

type Form = {
  setToken: React.Dispatch<SetStateAction<undefined>>;
};

export const Login = (props: Form): JSX.Element => {
    const {t} = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setToken} = props;


    async function loginUser(credentials: {
        user: {
            email: string | undefined;
            password: string | undefined;
        };
    }) {
        return fetch('http://localhost:3000/login', {
            body: JSON.stringify(credentials),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'

        })
            .then(data => data.json())
            .then(data => {window.location.reload(); return data.jwt});
    }


    const handleSubmit = async(event: React.FormEvent) => {
        event.preventDefault();

        const credentials = await loginUser({
            user: {
                email,
                password
            }
        });

        setToken(credentials);
    };


    return (

        <div className="login-form">
            <p className="form-title">{t('login_first')}</p>
            <form id="login" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="login" className="form-label">
                        {t('login')}
                        <input
                            id="login"
                            className="form-input"
                            type="text"
                            name="login"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="form-label">
                        {t('password')}
                        <input
                            id="password"
                            className="form-input"
                            type="text"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <button className="form-button" type="submit">
                        {t('button_ok')}
                    </button>
                </div>
            </form>
        </div>
    );
};
