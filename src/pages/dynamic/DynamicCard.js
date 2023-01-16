import React, { useState } from "react";
import "./index.scss";
import close from "../../assets/icons/close.svg";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import Search from "../../assets/icons/Search.svg";
import PlusIcon from "../../assets/icons/PlusIcon.svg";
import NormalButton from "component/Common/Button";

function DynamicCard() {
  let [arrayData, setArrayData] = useState([
    { name: "", customerContact: "", customerName: "" },
  ]);

  const addItem = () => {
    let data = [...arrayData];
    data.push({ name: "", customerContact: "", customerName: "" });
    setArrayData(data);
  };

  const handleChangeInput = (e, itemIndex) => {
    let data = [...arrayData];
    data[itemIndex].name = e.target.value;
    setArrayData(data);
  };

  const handleChangeContact = (e, itemIndex) => {
    let data = [...arrayData];
    data[itemIndex].customerContact = e.target.value;
    setArrayData(data);
  };

  const handlechangeName = (e, itemIndex) => {
    let data = [...arrayData];
    data[itemIndex].customerName = e.target.value;
    setArrayData(data);
  };

  const saveItem = () => {
    alert("successfully save");
    console.log(arrayData, "dataEle");
  };

  const deleteItem = (parentIndex) => {
    let data = [...arrayData];
    data = data.filter((item, index) => {
      if (index != parentIndex) {
        return item;
      }
    });
    setArrayData(data);
  };

  return (
    <div className="bill-card">
      <h1 className="bill-heading">Bill To</h1>

      {arrayData.map((item, itemIndex) => {
        return (
          <div className="customer-container" key={itemIndex}>
            <div className="heading-container">
              <h2 className="customer-heading">Customer {itemIndex + 1}</h2>
              <img
                src={deleteIcon}
                alt={deleteIcon}
                onClick={() => {
                  deleteItem(itemIndex);
                }}
              />
            </div>
            <div className="input-container">
              <input
                type="text"
                placeholder="Select..."
                className="input-field"
                onChange={(e) => {
                  handleChangeInput(e, itemIndex);
                }}
              />
              <div className="search-container">
                <img src={Search} alt={Search} />
                <hr className="hr-line1" />
                <img src={close} alt={close} />
              </div>
            </div>
            <div className="option-container">
              <select
                id="cars"
                className="item"
                onChange={(e) => {
                  handleChangeContact(e, itemIndex);
                }}
              >
                <option selected>Customer Contact</option>
                <option value="9491">9491</option>
                <option value="487235">487235</option>
                <option value="949178">949178</option>
                <option value="567485">567485</option>
              </select>
              <select
                id="cars"
                className="item"
                onChange={(e) => {
                  handlechangeName(e, itemIndex);
                }}
              >
                <option selected value="">
                  Sales Person
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div>
        );
      })}

      <div className="button-container">
        <NormalButton label="add more" rightIcon={PlusIcon} onClick={addItem} />
        <NormalButton className="save-button" label="Save" onClick={saveItem} />
      </div>
    </div>
  );
}

export default DynamicCard;
