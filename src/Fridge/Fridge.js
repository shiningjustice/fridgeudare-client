import React, { Component } from "react";
import FridgeSection from "../FridgeSection/FridgeSection";
import ApiContext from "../ApiContext";

export default class Fridge extends Component {
	static contextType = ApiContext;

	render() {
    const { sections=[] }= this.context;
		return (
			<>
				<h2>Your Fridge</h2>
				<ul className='Fridge__ul'>
					{!this.context.items && 
					<>
						<h3>No items were found for your selections</h3>
						<p>Please try again or click 'Reset Fields'.</p>
					</>
					}
					{sections.map(section => 
            <li className='FridgeSection__li' key={section.id}>
              <FridgeSection
                id={section.id}
                name={section.name}
                items={section.items}
              />
            </li>
          )}
				</ul>
			</>
		);
	}
}