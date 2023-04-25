
import React from 'react';
// Import {useTranslation} from 'react-i18next';
import {LocationComponent, RootLocationInterface} from './LocationComponent';


type Props = {
    locations?: RootLocationInterface[];
};

export const NestedLocationsTree: React.FC<Props> = ({locations}): JSX.Element => {
    console.log(locations, '0000');

    return <ul className="nested-locations-tree">
        {locations && <LocationComponent key={locations[0].uuid} location={locations[0]}/>}
    </ul>;
};


/*
 *{locations && locations.map(loc => <li key={loc.uuid}>{loc.name}</li>)}
 * Const [expanded] = useState<string[]>([]);
 * Const {t} = useTranslation();
 */

/*
 * Const handleToggle = (locationId: string) => {
 *     if (expanded.includes(locationId)) {
 *         setExpanded(expanded.filter(uuid => uuid !== locationId));
 *     } else {
 *         setExpanded([...expanded, locationId]);
 *     }
 * };
 */
