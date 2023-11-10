import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/header";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import WarehouseDetails from "./components/WarehouseDetails/WarehouseDetails";
import WarehouseForms from "./components/WarehouseForms/WarehouseForms";
import Footer from "./components/Footer/footer";

function App() {
	return (
		<>
			<Header />
			<div className="whiteBox">
				<BrowserRouter>
					<Routes>
						{/* ------------------Warehouse-------------------------------- */}
						<Route path="/" element={<WarehousePage />}></Route>
						<Route path="/warehouseDetails" element={<WarehouseDetails />} />
						<Route path="/editWarehouse" element={<WarehouseForms heading="Edit Warehouse" buttonText="Save"/>}></Route>
						<Route path="/addWarehouse" element={<WarehouseForms heading="Add New Warehouse" buttonText="+ Add Warehouse"/>}></Route>
						{/* -------------------------Inventory----------------- */}
						<Route path="/inventory" element={<InventoryPage />}>
							{/* <Route path="/inventory/:id" element={<Inventory />} /> */}
						</Route>
						{/* <Route path="/editInventory/:id" element={<EditInventory />}></Route>
						<Route path="/addInventory" element={<AddInventory />}></Route>*/}
					</Routes>
				</BrowserRouter>
			</div>
			<Footer />
		</>
	);
}

export default App;
