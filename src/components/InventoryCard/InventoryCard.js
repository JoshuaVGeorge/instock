import "./InventoryCard.scss";
import { Link } from "react-router-dom";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import chevron from "../../assets/Icons/chevron_right-24px.svg";
import { useState } from "react";
import DeleteInventoryModal from "../DeleteModal/deleteInventoryModal";

function InventoryCard({
	itemName,
	quantity,
	status,
	category,
	warehouse,
	id,
	deleteItem,
}) {
	const upperStatus = status.toUpperCase();

	// displays certain fields only when URL is inventory, by adding --inventoryPage as class
	const ifInventoryPage = () => {
		if (window.location.href === "http://localhost:3000/inventory") {
			return true;
		} else {
			return false;
		}
	};

	// MODAL LOGIC BELOW
	const [modal, setModal] = useState(false);
	const toggleModal = () => {
		setModal(!modal);
	};
	if (modal) {
		document.body.classList.add("active--modal");
	} else {
		document.body.classList.remove("active--modal");
	}

	return (
		<div className="inventoryCard">
			{modal === true && (
				<DeleteInventoryModal
					deleteItem={() => deleteItem(id)}
					toggleModal={toggleModal}
					itemName={itemName}
				/>
			)}
			<div className="inventoryCard__top">
				<div className="inventoryCard__container--left">
					<div className="inventoryCard__item">
						<p className="inventoryCard__label">INVENTORY ITEM</p>
						<Link to={`/inventory/${id}`} className="inventoryCard__link">
							<span className="inventoryCard__link--text">{itemName}</span>
							<img
								className="inventoryCard__link--icon"
								src={chevron}
								alt="chevron-icon"
							/>
						</Link>
					</div>
					<div className="inventoryCard__category">
						<p className="inventoryCard__label">CATEGORY</p>
						<p className="inventoryCard__text">{category}</p>
					</div>
				</div>
				<div
					className={`inventoryCard__container--right${
						ifInventoryPage() ? "--inventoryPage" : ""
					}`}>
					<div
						className={`inventoryCard__status${
							ifInventoryPage() ? "--inventoryPage" : ""
						}`}>
						<p className="inventoryCard__label">STATUS</p>
						<div
							className={`inventoryCard__tag${
								status === "In Stock" ? "" : "--noStock"
							}`}>
							{upperStatus}
						</div>
					</div>
					<div
						className={`inventoryCard__quantity${
							ifInventoryPage() ? "--inventoryPage" : ""
						}`}>
						<p className="inventoryCard__label">QTY</p>
						<p className="inventoryCard__text">{quantity}</p>
					</div>
					<div
						className={`inventoryCard__warehouse ${
							ifInventoryPage() ? "" : "disable"
						}`}>
						<p className="inventoryCard__label">WAREHOUSE</p>
						<p className="inventoryCard__text">{warehouse}</p>
					</div>
				</div>
			</div>
			<div className="inventoryCard__btm">
				<img
					onClick={toggleModal}
					className="inventoryCard__btm--delete"
					src={deleteIcon}
					alt="delete-icon"
				/>
				<Link to={`/inventory/${id}/edit`} className="inventoryCard__btm--link">
					<img
						className="inventoryCard__btm--edit"
						src={editIcon}
						alt="edit-icon"
					/>
				</Link>
			</div>
		</div>
	);
}

export default InventoryCard;
