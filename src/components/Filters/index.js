import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleCheckboxes} from "../../ac"

import Form from "./Form"
import "./index.scss"

class Filters extends Component {
	onCheckChange = (val) => {
		this.props.handleCheckboxes(val);
	}
	render() {
		let {filters} = this.props;
		return (
			<div className="filters">
				<h2 className="title">How many transfers?</h2>
				<Form filters={filters} onChange={this.onCheckChange}/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

const mapDispatchToProps = {
	handleCheckboxes
};

export default connect(
	mapStateToProps, mapDispatchToProps
)(Filters);
