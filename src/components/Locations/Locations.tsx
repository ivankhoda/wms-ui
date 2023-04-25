import React from 'react';
import './Locations.style.scss';
import {LocationInterface} from '../../store/locationStore';
import {LocationComponent} from '../LocationComponent/LocationComponent';
import {useTranslation} from 'react-i18next';

interface LocationsProps {
    locations?: LocationInterface[];
}

export const Locations: React.FC<LocationsProps> = ({locations}) => {
    const {t} = useTranslation();


    return <div className="locations">
        <h2 className="locations__title">{t('locations')}</h2>
        <ul className="locations__list">
            {locations &&
                locations.map(location => <LocationComponent key={location.uuid} location={location} />)
            }
        </ul>
    </div>;
};

