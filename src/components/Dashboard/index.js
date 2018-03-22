import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//dummy
import TicketCity from "../../presentational/TicketCity";
import TicketDate from "../../presentational/TicketDate";
import TicketTime from "../../presentational/TicketTime";

import "./index.scss";

class Dashboard extends Component {
	state = {
		all_transfers: false,
		no_transfers: false,
		transfer_1: false,
		transfer_2: false,
		transfer_3: false
	};
	handleTickets = () => {
		const { tickets } = this.props;
		const { all_transfers, transfer_2 } = this.state;
		return Object.keys(tickets).map(element => {
			const targ = tickets[element].name;
			console.log(all_transfers);
			console.log(targ);
			return (
				<div
					className={
						transfer_2 == targ && !!all_transfers
							? "visible ticket"
							: "ticket hidden"
					}
					key={element}>
					<div className="left-side">
						<img src={tickets[element].image} alt="" />
						<a href="#" className="btn">
							Buy ticket <br /> only for {tickets[element].price} ₽
						</a>
					</div>
					<div className="right-side">
						<TicketTime
							from={tickets[element].departure.time}
							to={tickets[element].arrival.time}
							transfers={tickets[element].transfers}
						/>
						<TicketCity
							from={tickets[element].departure.city}
							to={tickets[element].arrival.city}
						/>
						<TicketDate
							from={tickets[element].departure.date}
							to={tickets[element].arrival.date}
						/>
					</div>
				</div>
			);
		});
	};

	handleCheckboxes = () => {
		const { activeFilters } = this.props;
		const {
			all_transfers,
			no_transfers,
			transfer_1,
			transfer_2,
			transfer_3
		} = activeFilters;
		if (all_transfers !== this.state.all_transfers) {
			this.setState({ all_transfers });
		} else if (no_transfers !== this.state.no_transfers) {
			this.setState({ no_transfers });
		} else if (transfer_1 !== this.state.transfer_1) {
			this.setState({ transfer_1 });
		} else if (transfer_2 !== this.state.transfer_2) {
			this.setState({ transfer_2 });
		} else if (transfer_3 !== this.state.transfer_3) {
			this.setState({ transfer_3 });
		}
	};

	render() {
		this.handleCheckboxes();
		return <div className="tickets">{this.handleTickets()}</div>;
	}
}

Dashboard.propTypes = {
	tickets: PropTypes.object.isRequired
};

export default Dashboard;
