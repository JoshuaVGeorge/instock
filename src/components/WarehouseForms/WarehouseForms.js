import "./WarehouseForms.scss";
import { Link, useNavigate } from "react-router-dom";
import backArrow from "../../assets/Icons/arrow_back-24px.svg";

function WarehouseForms(props) {
	let navigate = useNavigate();

	const clickHandler = (event) => {
		event.preventDefault();
		navigate("/")
	}

	const submitHandler = (event) => {
		event.preventDefault();
		if (window.location.href.includes("addWarehouse")) {
			console.log(event.target.warehouseName.value);
		}
	}
	if (window.location.href.includes("editWarehouse")) {
		console.log("Left to implement");
	} 
	return (
		<div className="warehouseForms">
			<div className="warehouseForms__header--container">
				<Link to="/" className="warehouseForms__header--link">
					<img
						className="warehouseForms__header--icon"
						src={backArrow}
						alt="back-arrow"
					/>
				</Link>
				<p className="warehouseForms__header--title">{props.heading}</p>
			</div>
			<form onSubmit={submitHandler}>
				<div className="warehouseForms__container">
					<div className="warehouseForms__form">
						<h2 className="warehouseForms__form--title">Warehouse Details</h2>

						<h3 className="warehouseForms__form--label">Warehouse Name</h3>
						<textarea  name="warehouseName" placeholder="Warehouse Name" className="warehouseForms__form--input"></textarea>

						<h3 className="warehouseForms__form--label">Street Address</h3>
						<textarea  name="streetAddress" placeholder="Street Address" className="warehouseForms__form--input"></textarea>

						<h3 className="warehouseForms__form--label">City</h3>
						<textarea  name="city" placeholder="City" className="warehouseForms__form--input"></textarea>

						<h3 className="warehouseForms__form--label">Country</h3>
						<textarea  name="country" placeholder="Country" className="warehouseForms__form--input"></textarea>
					</div>
					<hr className="warehouseForms__divider"/>
					<div className="warehouseForms__form">
						<h2 className="warehouseForms__form--title">Contact Details</h2>

						<h3 className="warehouseForms__form--label">Contact Name</h3>
						<textarea  name="contactName" placeholder="Contact Name" className="warehouseForms__form--input"></textarea>

						<h3 className="warehouseForms__form--label">Position</h3>
						<textarea  name="position" placeholder="Position" className="warehouseForms__form--input"></textarea>

						<h3 className="warehouseForms__form--label">Phone Number</h3>
						<textarea  name="phoneNumber" placeholder="Phone Number" className="warehouseForms__form--input"></textarea>

						<h3 className="warehouseForms__form--label">Email</h3>
						<textarea  name="email" placeholder="Email" className="warehouseForms__form--input"></textarea>
					</div>
				</div>
				<div className="warehouseForms__buttons">
					<button className="warehouseForms__buttons--button warehouseForms__buttons--cancel" onClick={clickHandler}>Cancel</button>
					<button className="warehouseForms__buttons--button warehouseForms__buttons--addWarehouse" type="submit">{props.buttonText}</button>
				</div>
			</form>
		</div>
	);
}

export default WarehouseForms;
