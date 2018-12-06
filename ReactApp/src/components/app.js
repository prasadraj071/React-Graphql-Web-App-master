import React, { Component } from 'react';

import Search from '../containers/search';
import ListOfHotels from "../containers/list_of_hotels";

class App extends Component{
    render(){
        return(
            <div>
                <Search></Search>
                <ListOfHotels></ListOfHotels>
            </div>
        )
    }
}

export default App;