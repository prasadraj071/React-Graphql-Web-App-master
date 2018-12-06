import React,{Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'


class Reservation extends Component {

    componentWillMount(){
        this.props.getBooking() /// calling movies list function form actions
    }
    listofbooking = ({hotel}) => {
        console.log(">>>>"+hotel);
        if(hotel){
            return hotel.map((book)=>{
                var a  = book.city.replace(/\s/g,'')
                 return(

                    <div class="container">
                    <br/><br/>
                   
                        <div className="media border p-3"  key={a}>
                            <img src={book.cover} alt={book.city} className="mr-3 mt-3 rounded-circle"/>
                            <div className="media-body">
                            <br/><br/>
                            <h4> Your City {book.hotel} Boking is confirmed for {book.date}</h4>
                            </div>
                        </div>
                    </div>
                  
                        
                )
            })
        }
    }


    render(){
        return(
            <div>
                <center><h2>Your Reservation</h2></center>
                {this.listofbooking(this.props.hotel)}
            </div>
        )
        
    }
    
}

function mapStateToProps(state){
    console.log(state.hotel.data);
    console.log(">>>>>inside map state to props");
    return{
        hotel:state.hotel
        
    }
}

export default connect(mapStateToProps,actions)(Reservation);