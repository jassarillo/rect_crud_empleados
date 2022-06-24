/*import React from 'react'

function SearchBar(placeholder, data) {
  return (
    <div className='search'>
        <div className='searchInputs'>
            <input type="text"/>
            <div className='searchIcon'></div>
        </div>
        <div className='dataResult'></div>
    </div>
  )
}

export default SearchBar
*/



import React from 'react';
class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className='search'>
            <div className='searchInputs'>
                <input type="text"/>
                <div className='searchIcon'></div>
            </div>
            <div className='dataResult'></div>
            </div> 
        );
    }
}
 
export default SearchBar;