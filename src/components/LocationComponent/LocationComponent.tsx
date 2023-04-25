import React, {Component} from 'react';
import {LocationInterface, LocationStore} from '../../store/locationStore';
import './Location.style.scss';
import {inject, observer} from 'mobx-react';

/*
 * Import {LocationInfo} from './LocationInfo';
 * Import {LocationContent} from '../LocationContent/LocationContent';
 */
// Import {NestedLocationsTree} from './LocationTree';


export interface RootLocationInterface extends LocationInterface {
    location?: LocationInterface;
    locations?: Location[];
    rootLocations?: RootLocationInterface[];
    locationStore?: LocationStore;
    onClick?: () => void;
    children?: JSX.Element|JSX.Element[];
    isExpanded?: boolean;
  }

  interface LocationComponentState {
    location?: LocationInterface;
    showContent?: boolean;
  }

@inject('locationStore')
@observer
export class LocationComponent extends Component<RootLocationInterface, LocationComponentState> {
    constructor(props: RootLocationInterface) {
        super(props);
        this.state = {location: {}, showContent: false};
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(): void {
        this.props.locationStore.getSlotInfo(this.props.location.uuid);
    }

    handleClick(): void {
        this.setState({showContent: !this.state.showContent});
    }

    render(): JSX.Element {
        const {location} = this.props;
        const {slots} = this.props.locationStore.slotInfo;
        const {showContent} = this.state;

        console.log(slots, '?????');
        return (
            <>{location && <div key={location.uuid}
                className={`locations__item__${location.parent_id === null ? 'parent' : 'child'}`}>
                {location && <div key={location.uuid}>{location.name}</div>}
                {slots &&
                <p className={`${this.state.showContent === true ? 'minus-icon' : 'plus-icon'}`}
                    onClick={this.handleClick}>
                </p>}
                {slots && showContent && slots.map(s => <div key={s.uuid}>{s.name}</div>)}

            </div>}
            </>);
    }
}

// {/* {(slots || items) && <LocationContent slots={slots} items={items} show={showContent}/>}*/}
// <LocationInfo location={location} slots={slots?.length} items={items?.length}/>
// {/*{slots && showContent && <div><NestedLocationsTree locations={slots}/></div>}*/}
