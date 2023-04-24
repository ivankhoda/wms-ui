import React from 'react';
import './Locations.style.scss';
import {Location} from '../../store/locationStore';
import {LocationComponent} from '../LocationComponent/LocationComponent';

interface LocationsProps {
    locations: Location[];
}

export const Locations: React.FC<LocationsProps> = ({locations}) => {
    console.log(locations);
    return <div className="locations">
        <h2 className="locations__title">Locations</h2>
        <ul className="locations__list">
            {locations &&
                locations.map(location => <LocationComponent key={location.uuid} {...location} />)}
        </ul>
    </div>;
};

