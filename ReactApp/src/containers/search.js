import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHotel } from '../actions';
import { getAllHotels } from '../actions';
import { getBooking } from '../actions';

import { bindActionCreators } from 'redux';

class Search extends Component{

    constructor(props){
        super(props);
        this.state = {
            keyword:''
        }
    }

    searchCar =(event) =>{
        event.preventDefault();
        this.props.getHotel(this.state.keyword);
        let outres = this.props.getHotel()
        console.log(">>>>>outer"+ outres)
    }

    handleChange = (event) =>{
        this.setState({
            keyword:event.target.value
        })
    }

    componentDidMount(){
        let outres = this.props.getAllHotels()
    }

    render(){
        return(

            <div className="main_search">
            </div>
        )
    }
}

//mapStateToProps
// bind action in props action : 
function mapDispatchToProps(dispatch){
    return bindActionCreators({getHotel, getAllHotels, getBooking},dispatch);
}
export default connect(null,mapDispatchToProps) (Search);