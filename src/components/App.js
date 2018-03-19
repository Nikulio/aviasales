import React, {Component} from "react";
import {fetchTickets} from "../ac";
import {connect} from "react-redux";
import Dashboard from "./Dashboard";

class App extends Component {
	componentWillMount() {
		this.props.fetchTickets();
	}
	
	render() {
		const {tickets} = this.props;
		return (
			<div className="app">
				<Dashboard tickets={tickets}/>
			</div>
		);
	}
}

const mapStateToProps = {
	fetchTickets
};

export default connect(state => ({tickets: state.tickets}), mapStateToProps)(
	App
);
