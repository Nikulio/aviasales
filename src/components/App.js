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
		const {tickets, filters, activeFilters} = this.props;
		return (
			<div className="app">
				<Filters filters={filters}/>
				<Dashboard tickets={tickets} activeFilters={activeFilters}/>
			</div>
		);
	}
}

const mapStateToProps = {
	fetchTickets,
	fetchFilters
};

export default connect(state => ({
	tickets: state.tickets,
	filters: state.filters,
	activeFilters: state.activeFilters
}), mapStateToProps)(
	App
);
