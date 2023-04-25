import React, {Component} from 'react';
import './Main.style.scss';
import {inject, observer} from 'mobx-react';
import {locationStore} from '../../store/global';
import {Locations} from '../Locations/Locations';
import {LocationInterface} from '../../store/locationStore';

interface P {
    locationStore?: { locations?: LocationInterface[],
    rootSlots?: LocationInterface[]};
}

@inject('locationStore')
@observer

export class Main extends Component<P> {
    componentDidMount(): void {
        locationStore.getRootSlots();
    }

    render(): JSX.Element {
        const {rootSlots} = locationStore;

        return <Locations locations={rootSlots} />;
    }
}

