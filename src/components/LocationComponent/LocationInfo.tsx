import React from 'react';
import './Location.style.scss';
import {LocationInterface} from '../../store/locationStore';

import {useTranslation} from 'react-i18next';

interface LocationInfoProps extends LocationInterface {
    location: LocationInterface;
    slots?: number;
    items?: number;
}

export const LocationInfo: React.FC<LocationInfoProps> = ({location, slots, items}) => {
    const {t} = useTranslation();


    return <>
        <h3 className="locations__item-title">{t('name')}: {location.name}</h3>
        <p className="locations__item-description">{t('code')}: {location.code}</p>
        <div className="slot-info-container">
            {slots && <div className="slot-info-child-slots">{t('child_slots')}: {slots}</div>}
            {items && <div className="slot-info-num-items">{t('items')}: {items}</div>}
        </div>
    </>;
};
