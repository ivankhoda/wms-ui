import React from 'react';
import {Location as LocationProps} from '../../store/locationStore';
import './Location.style.scss';


/*
 * Interface ParentLocation extends Location {
 *     locations?: Location[]
 * }
 */
export const LocationComponent: React.FC<LocationProps> = (props: LocationProps) => {
    const location = props;
    console.log(location, '0000');
    return <li key={location.uuid} className={`locations__item__${location.parent_id === null ? 'parent' : 'child'}`}>
        <h3 className="locations__item-title">{location.name}</h3>
        <p className="locations__item-description">{location.code}</p>
    </li>;
};
