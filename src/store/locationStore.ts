import {observable, action, makeObservable} from 'mobx';

// eslint-disable-next-line consistent-return
const getToken = (): string => {
    const tokenString = sessionStorage.getItem('token');

    if (tokenString) {
        const token = JSON.parse(tokenString);

        return token;
    }
};
export interface Location {
    uuid?: string,
    code?: string,
    name?: string,
    parent_id?: number,
    created_at?: string,
    updated_at?: string
}


export class LocationStore {
    locations: Location[] = [];

    constructor() {
        makeObservable(this, {
            getData: action,
            locations: observable,
            setData: action
        });
    }

    setData(newData: Location[]): void {
        this.locations = newData;
    }


    getData(): void {
        fetch('http://localhost:3000/api/slots', {headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        },
        method: 'GET'})
            .then(data => data.json())
            .then(data => this.setData(data));
    }
}

