import React, { Component } from 'react'

import { FilterItem } from '../../utilities/FilterItem';
import styles from "./Filters.module.css";
import FilterList from '../FilterList';
import Button from '../Button';

class Filters extends Component {
    state = {
        filterItems: [
            {
                header: "Location",
                params: [{
                    label: "Remote",
                    name: "remote"
                }, {
                    label: "Poland",
                    name: "poland"
                }, {
                    label: "Ukraine",
                    name: "ukraine"
                }, {
                    label: "Czech",
                    name: "czech"
                },

                ]
            },
            {
                header: "Payment",
                params: [
                    {
                        label: "Verified",
                        name: "verified"
                    }, {
                        label: "Unverified",
                        name: "unverified"
                    }
                ]
            },

            {
                header: "Level",
                params: [
                    {
                        label: "Entry",
                        name: "entry"
                    }, {
                        label: "Intermediate",
                        name: "intermediate"
                    }, {
                        label: "Expert",
                        name: "expert"
                    }
                ]
            },

        ],
        selectedFilters: [

        ]
    }

    selectedFiltersHandler(e) {
        // copied the state 
        // const items = [...this.state.selectedFilters];
        // const exisitigSelectedItem = items.findIndex(item => item.name === e.target.name);
        // // check if the item exists with the same info so we just modify it 
        // if (items[exisitigSelectedItem]) {
        //     items[exisitigSelectedItem].selected = false
        // } else {
        //     const newSelect = new FilterItem(e.target.name, e.target.checked);
        //     items.push(newSelect);
        // }
        // this.setState({ selectedFilters: items })
    }
    render() {
        return (
            <>
                <div className={styles.small__menu__filters} >
                    <Button 
                        type="filter"
                        label="Filters"
                    />
                </div>
                <form className={styles.filters}>
                    <FilterList
                        config={this.state.filterItems}
                        change={(e) => this.selectedFiltersHandler(e)}
                    />
                </form>
            </>
        )
    }

}

export default Filters;
