import React from 'react'
import { Field, reduxForm } from 'redux-form'

let Form = props => {
	
	const { handleSubmit, filters } = props;
	console.log("--- filters", filters);
	const data = filters ? Object.keys(filters).map(element => {
		let key = `form_filter_${element}`;
		return (
			<div className="input-wrap" key={key}>
				<Field name={filters[element].name} id={filters[element].name} component='input' type="checkbox"/>
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
			<button type="submit">Submit</button>
		</form>
	)
}

Form = reduxForm({
	// a unique name for the form
	form: 'filters'
})(Form)

export default Form