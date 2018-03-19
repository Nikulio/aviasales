import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from "./Form"

class Filters extends Component {
	render() {
		let {filters} = this.props;
		return (
			<div className="filters">
				<h2>How many transfers?</h2>
				<Form filters={filters}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

export default connect(
	mapStateToProps,
)(Filters);
