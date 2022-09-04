import React from "react";

import Style from "../modules/HostelCheckIn.module.css";

export function HostelCheckIn() {
	return (
		<div className="CheckIn" id="login">
			<div className="header">HostelCheckIn</div>
			<div className="Form">
				<form>
					<div>
						<label htmlFor="rollnoin">Roll No</label>
						<input
							type="text"
							required
							placeholder="Enter Roll No"
							name="rollnoin"
						/>
					</div>
					<div>
						<label htmlFor="namein">Name</label>
						<input
							type="text"
							required
							placeholder="Enter name"
							name="namein"
						/>
					</div>

					<div className="date">{/* <p> ddd {this.state.date}</p> */}</div>
					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
}
