import React, { Component } from "react";
import Options from "../../components/Options/Options";
import Fridge from '../../components/Fridge/Fridge';


import './DemoMain.css';

export default class DemoMain extends Component {

	render() {
		return (
			<main className='DemoMain__main'>
				<Options parent='DemoMain'/>

				<Fridge />
			</main>
		);
	}
}
