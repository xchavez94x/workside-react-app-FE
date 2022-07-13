import React, { Component } from 'react'

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

        ],

        filterClicked: false
    }

    // selectedFiltersHandler(e) {

    // }

    showFiltersHandler () {
        this.setState( prevState => {
            return {
                ...prevState,
                filterItems: [ 
                    ...prevState.filterItems
                ],
                selectedFilters: {
                    ...prevState.selectedFilters
                },
                filterClicked: !prevState.filterClicked
            }
        });
    }

    render() {
        let classes = [
            styles.filters, 
            styles.showFilters
        ]
        return (
            <>
                <div 
                    className={styles.small__menu__filters} 
                    
                >
                    <Button 
                        type="filter"
                        label="Filters"
                        isClicked={this.state.filterClicked}
                        clicked={this.showFiltersHandler.bind(this)}
                    />
                </div>
                <form 
                    style={ this.state.filterClicked ? { display: "flex" } : { display: 'none' }}
                    className={classes.join(' ')}>
                    <FilterList
                        config={this.state.filterItems}
                        change={(e) => this.selectedFiltersHandler(e)}
                    />
                </form>
            </>
        )
    }

}

export default React.memo(Filters);
