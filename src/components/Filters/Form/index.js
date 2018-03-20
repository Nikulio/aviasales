import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'



class Form extends Component{
	onCheckChange = (val) => {
		this.props.onChange(val)
	};
	render() {
		const { handleSubmit, filters } = this.props;
		const data = filters ? Object.keys(filters).map(element => {
			let key = `form_filter_${element}`;
			return (
				<div className="input-wrap filter" key={key}>
					<Field name={filters[element].name}
					       id={filters[element].name}
					       component='input' type="checkbox"
					       onChange={this.onCheckChange}
					
					/>
					<span className="filter__name">
					{filters[element].text}
				</span>
				</div>
			)
		}) : (
			<div>fetching</div>
		);
		return (
			<form onSubmit={handleSubmit}>
				{data}
			</form>
		)
	}

}

Form = reduxForm({
	// a unique name for the form
	form: 'filters'
})(Form)

export default Form