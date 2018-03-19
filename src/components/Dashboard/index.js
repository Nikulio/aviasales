import React, {Component} from "react";
import PropTypes from "prop-types";


//dummy
import TicketCity from "../../presentational/TicketCity"
import TicketDate from "../../presentational/TicketDate"
import TicketTime from "../../presentational/TicketTime"


import "./index.scss";

class Dashboard extends Component {
	handleTickets = () => {
		const {tickets} = this.props;
		return Object.keys(tickets).map(element => {
			return (
				<div className="ticket" key={element}>
					<div className="left-side">
						<img src={tickets[element].image} alt=""/>
						<a href="#" className="btn">Buy ticket <br/> only for {tickets[element].price} ₽</a>
					</div>
					<div className="right-side">
						<TicketTime from={tickets[element].departure.time}
						            to={tickets[element].arrival.time}
						            transfers={tickets[element].transfers}
						/>
						<TicketCity from={tickets[element].departure.city} to={tickets[element].arrival.city}/>
						<TicketDate from={tickets[element].departure.date} to={tickets[element].arrival.date}/>
					
					
					</div>
				</div>
			);
		});
	};
	
	render() {
		return <div className="tickets">{this.handleTickets()}</div>;
	}
}

Dashboard.propTypes = {
	tickets: PropTypes.object.isRequired
};

export default Dashboard;
