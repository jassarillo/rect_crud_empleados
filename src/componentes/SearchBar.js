import React from 'react';
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='search'>
            <div className='searchInputs'>
                <input type="text" placeholder='Ingresa una palabra' />
                <div className='searchIcon'></div>
            </div>
            <div className='dataResult'></div>
            </div> 
        );
    }
}
 
export default SearchBar;