

import React, {Component, Fragment} from 'react';

const ChildFrag = (props) => {
	return(
		<Fragment>
			<div>{props.name}</div>
			<div>Hi</div>
		</Fragment>
	)
}

export class ParentFrag extends Component {
	render() {
		return(
			<ChildFrag name="Ssanthosh"/>
		)
	}
}