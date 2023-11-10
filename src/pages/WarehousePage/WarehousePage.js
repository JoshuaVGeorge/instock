import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import wareHouseData from "../../test_data/warehouse_JSON.json";
import WarehouseComponent from "../../components/WarehouseComponent/WarehouseComponent";
import "./WarehousePage.scss";
console.log(wareHouseData);
function WarehousePage() {
  return (
    <section className="warehouse">
      <div className="warehouse__container">
        <div className="warehouse__head">
          <h1 className="warehouse__header">Warehouses</h1>

          <input
            className="warehouse__search-bar"
            type="text"
            placeHolder="Search..."
          ></input>

          <button className="warehouse__button">
            <p className="warehouse__button-text">+ Add New Warehouse</p>
          </button>
        </div>
      </div>
      {wareHouseData.map((data) => (
        <WarehouseComponent
          key={data.id}
          warehouseName={data.warehouse_name}
          contactName={data.contact_name}
          contactEmail={data.contact_email}
          contactPhone={data.contact_phone}
          address={data.address}
          city={data.city}
          country={data.country}
        />
      ))}
      {/* <WarehouseDetails /> */}
    </section>
  );
}

export default WarehousePage;
