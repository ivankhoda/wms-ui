import React, {Component} from 'react';
import './Main.style.scss';
import {inject, observer} from 'mobx-react';
import {locationStore} from '../../store/global';
import {Locations} from '../Locations/Locations';
import {Location} from '../../store/locationStore';

interface P {
    locationStore?: { locations?: Location[] };
}

@inject('locationStore')
@observer

export class Main extends Component<P> {
    componentDidMount(): void {
        locationStore.getData();
    }

    render(): JSX.Element {
        const {locations} = this.props.locationStore;
        return <Locations locations={locations} />;
    }
}

