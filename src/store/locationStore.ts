import {observable, action, makeObservable} from 'mobx';
import {RootLocationInterface} from '../components/LocationComponent/LocationComponent';

// eslint-disable-next-line consistent-return
const getToken = (): string => {
    const tokenString = sessionStorage.getItem('token');

    if (tokenString) {
        const token = JSON.parse(tokenString);

        return token;
    }
};
export interface LocationInterface {
    uuid?: string,
    code?: string,
    name?: string,
    parent_id?: number,
    created_at?: string,
    updated_at?: string
}

export interface ItemInterface {
    code?: string;
    name?: string;
    created_at?: string;
    updated_at?: string;
    parent_slot?: string;
}

export interface SlotInfoInterface extends LocationInterface {
    slots?: LocationInterface[];
    rootSlots?: RootLocationInterface[];
    items?: ItemInterface[];
}

export class LocationStore {
    locations: LocationInterface[] = [];

    rootSlots: LocationInterface[] = [];

    slotInfo: SlotInfoInterface = {};

    constructor() {
        makeObservable(this, {
            getData: action,
            locations: observable,
            rootSlots: observable,
            setData: action,
            setRootSlot: action,
            setSlotInfo: action,
            slotInfo: observable
        });
    }

    setData(newData: LocationInterface[]): void {
        this.locations = newData;
    }

    setRootSlot(rootSlots: LocationInterface[]):void {
        this.rootSlots = rootSlots;
    }

    setSlotInfo(data: LocationInterface):void {
        this.slotInfo = data;
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

    getRootSlots(): void {
        fetch('http://localhost:3000/api/slots/?&root_slots=true', {headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        },
        method: 'GET'})
            .then(data => data.json())
            .then(data => this.setRootSlot(data));
    }

    getSlotInfo(id: string): void {
    // http://localhost:3000/api/slots/
        fetch(`http://localhost:3000/api/slots/${id}?with_items=true&with_child_slots=true`, {headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        },
        method: 'GET'})
            .then(data => data.json())
            .then(data => this.setSlotInfo(data));
    }
}

