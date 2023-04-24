import {useState} from 'react';

export const useToken = () => {
    const getToken = (): string => {
        const tokenString = sessionStorage.getItem('token');

        if (tokenString) {
            const token = JSON.parse(tokenString);

            return token;
        }
    };

    const [token, setToken] = useState(getToken());

    const saveToken = (userToken: any) => {
        sessionStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.data);

    };

    return {
        getToken,
        setToken: saveToken,
        token
    };
};
