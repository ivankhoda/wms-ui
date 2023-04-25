import React from 'react';
import {ItemInterface, LocationInterface} from '../../store/locationStore';

import {useTranslation} from 'react-i18next';

interface LocationContentProps extends LocationInterface {
    slots?: LocationInterface[];
    items?: ItemInterface[];
    show?: boolean;
    click?: void;
}

export const LocationContent: React.FC<LocationContentProps> = ({slots, items, show}) => {
    const {t} = useTranslation();


    return <>
        {show &&

        <div className="">

            {slots && slots.map(slot => <li key={slot.uuid}>
                {t('name')}: {slot.name}
            </li>)}
            {items && items.map(item => <li key={item.name}>{t('name')}: {item.name}</li>)}
        </div>}
    </>;
};
