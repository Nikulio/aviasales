import React, {Component} from "react";
import {fetchTickets, fetchFilters} from "../ac";
import {connect} from "react-redux";
import Dashboard from "./Dashboard";
import Filters from "./Filters"


class App extends Component {
	componentWillMount() {
		this.props.fetchTickets();
		this.props.fetchFilters();
	}
	
	render() {
		const {tickets, filters} = this.props;
		return (
			<div className="app">
				<Filters filters={filters}/>
				<Dashboard tickets={tickets}/>
			</div>
		);
	}
}

const mapStateToProps = {
	fetchTickets,
	fetchFilters
};

export default connect(state => ({tickets: state.tickets, filters: state.filters}), mapStateToProps)(
	App
);
