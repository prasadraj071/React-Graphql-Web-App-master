import React,{Component} from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {Link} from 'react-router-dom';


class ListOfHotels extends Component {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            hotel:'',
            date:''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeHotel = this.handleChangeHotel.bind(this);
        this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
        this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.state)
    }
    handleChangeName(event) {
        this.setState({name: event.target.value});
    }
    handleChangeHotel(event) {
        this.setState({hotel: event.target.value});
    }
    handleChangeStartDate(event) {
        this.setState({startdate: event.target.value});
    }

    handleChangeEndDate(event) {
        this.setState({enddate: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log("reaching here")
        const form = {
          city: this.state.name,
          hotel: this.state.hotel,
          startDate: this.state.startdate,
          endDate: this.state.enddate,
          cover:'https://image.ibb.co/eDQQwe/holiday_Inn_New_York.jpg'
        }
        console.log(">>>>form>>>>"+JSON.stringify(form))
        let uri = 'http://localhost:3000/booking';
        axios.post(uri, form).then((response) => {
         this.setState({
            modal: !this.state.modal
          });
        });
        this.setState(() => this.state)
      }
    ListOfHotels = ({hotel}) => {
        if(hotel){
            return hotel.map((hotel)=>{
                var a  = hotel.name.replace(/\s/g,'')
                 return(

                    <div className="container">
                    <br/><br/>
                        
                        <div className="media border p-3"  key={hotel.id}>
                            <img src={hotel.cover} alt={hotel.name} className="mr-3 mt-3 rounded-circle"/>
                            <div className="media-body">
                            <br/><br/>
                            <h4>{hotel.name}</h4>
                            <h4>{hotel.city}</h4>
                            <h4>Room Available: {hotel.available}</h4>
                            </div>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={'#'+a}>
                                   Book Hotel
                            </button>
                            <div className="modal fade" id={a}>
                                        <div className="modal-dialog">
                                        <div className="modal-content">
                                        
                                        
                                            <div className="modal-header">
                                            <h4 className="modal-title">Enter Detail for> {hotel.name}</h4>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                            </div>
                                            
                                        
                                            <div className="modal-body">
                                                <form id="bookingForm">
                                                    <div className="form-group">
                                                        <label for="name">City Name</label>
                                                        <input type="text" 
                                                                className="form-control" 
                                                                id="name"
                                                                value={this.state.name}
                                                                onChange={this.handleChangeName} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="hotel">Hotel Name</label>
                                                        <input type="text" 
                                                                className="form-control" 
                                                                id="hotel"
                                                                value={this.state.hotel}
                                                                onChange={this.handleChangeHotel} />
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="date">Check In</label>
                                                        <input type="date" 
                                                                className="form-control"
                                                                 id="date"
                                                                 value={this.state.startdate}
                                                                 onChange={this.handleChangeStartDate}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label for="date">Check Out</label>
                                                        <input type="date" 
                                                                className="form-control"
                                                                 id="date"
                                                                 value={this.state.enddate}
                                                                 onChange={this.handleChangeEndDate}/>
                                                    </div>
                                                    <input type="submit"
                                                             className="btn btn-success"
                                                             onClick={this.handleSubmit}
                                                             value="Book Hotel"/>
                                                </form>
                                            </div>
                                            
                                        
                                            <div className="modal-footer">
                                            <Link to="/reservation"  className="btn btn-danger" data-dismiss="modal">Close</Link>
                                            </div>
                                            
                                        </div>
                                        </div>
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
                <center><h2>Available Hotel</h2></center>
                {this.ListOfHotels(this.props.hotels)}
            </div>
        )
        
    }
    
}

function mapStateToProps(state){
    return{
        hotels:state.hotel
    }
}
export default connect(mapStateToProps,null)(ListOfHotels);