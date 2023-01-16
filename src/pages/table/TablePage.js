import React, { useState, useEffect } from "react";
import NoData from "component/Common/NoData";
import NormalTable from "component/Common/Table";
import useMultiSelect from "hooks/useMultiSelect";
import NormalCheckbox from "component/Common/NormalCheckbox/index";
import Search from "../../assets/icons/Search.svg";
import NormalButton from "component/Common/Button";
import "./index.scss";
import Pagination from "component/Common/Pagination/Pagination";

function TablePage() {
  const projectHeader = [
    "Home Owner",
    "Hold",
    "Opportunity",
    "Hold Date",
    "Expiry Date",
    "Days Left",
    "Location",
    "Bill To Customer",
    "Associates",
    "Internal Notes",
  ];

  const innerTable = [
    "Item",
    "Serial Num",
    "Barcode",
    "Lot",
    "Slab #",
    "Block",
    "Quantity",
    "Unit Price",
    "Amount",
  ];
  const [original, setoriginal] = useState([
    {
      id: 1,
      itemName: "Hydrogen",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 2,
      itemName: "Helium",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 3, itemName: "Lithium", isSelect: false },
    {
      id: 4,
      itemName: "Beryllium",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 5,
      itemName: "Boron",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 6, itemName: "Carbon", isSelect: false },
    {
      id: 7,
      itemName: "Nitrogen",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 8,
      itemName: "Oxygen",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 9, itemName: "Fluorine", isSelect: false },
    {
      id: 10,
      itemName: "Neon",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 11,
      itemName: "Sodium",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 12, itemName: "Magnesium", isSelect: false },
    {
      id: 13,
      itemName: "Aluminium",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 14,
      itemName: "Silicon",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 15, itemName: "Phosphorus", isSelect: false },
    {
      id: 16,
      itemName: "Hydrogen",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 17,
      itemName: "Helium",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 18, itemName: "Lithium", isSelect: false },
    {
      id: 19,
      itemName: "Beryllium",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 20,
      itemName: "Boron",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 21, itemName: "Carbon", isSelect: false },
    {
      id: 22,
      itemName: "Nitrogen",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 23,
      itemName: "Oxygen",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 24, itemName: "Fluorine", isSelect: false },
    {
      id: 25,
      itemName: "Neon",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 26,
      itemName: "Sodium",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 27, itemName: "Magnesium", isSelect: false },
    {
      id: 28,
      itemName: "Aluminium",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 29,
      itemName: "Silicon",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 30, itemName: "Phosphorus", isSelect: false },
    {
      id: 31,
      itemName: "Hydrogen",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 32,
      itemName: "Helium",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 33, itemName: "Lithium", isSelect: false },
    {
      id: 34,
      itemName: "Beryllium",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 35,
      itemName: "Boron",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 36, itemName: "Carbon", isSelect: false },
    {
      id: 37,
      itemName: "Nitrogen",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 38,
      itemName: "Oxygen",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 39, itemName: "Fluorine", isSelect: false },
    {
      id: 40,
      itemName: "Neon",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 41,
      itemName: "Sodium",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 42, itemName: "Magnesium", isSelect: false },
    {
      id: 43,
      itemName: "Aluminium",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 44,
      itemName: "Silicon",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 45, itemName: "Phosphorus", isSelect: false },
    {
      id: 46,
      itemName: "Hydrogen",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 47,
      itemName: "Helium",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    { id: 48, itemName: "Lithium", isSelect: false },
    {
      id: 49,
      itemName: "Beryllium",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
    {
      id: 50,
      itemName: "Boron",
      isSelect: false,
      innerData: [{ itemName: "element" }, { itemName: "element" }],
    },
  ]);
  const [table, setTable] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [order, setOrder] = useState("ASC");
  const { headerCheckbox, handleHeaderCheckbox, handleCheckbox } =
    useMultiSelect(table, setTable);
  const [page, setPage] = useState(1);

  const getData = (page) => {
    let data = [...original];
    data = data.slice(page * 10 - 10, 10 * page);
    setTable(data);
  };

  useEffect(() => {
    getData(1);
  }, []);

  //search Element
  const searchElement = (value) => {
    let data = [];
    if (value !== "" && value !== undefined) {
      data = original.filter((item) => {
        if (item.itemName.toLowerCase().includes(value.toLowerCase())) {
          return item;
        }
      });
    } else {
      data = [...original];
    }
    data = data.slice(page * 10 - 10, 10 * page);
    setTable(data);
  };

  //apply Filter
  const applyFilter = () => {
    let data = [...table];
    if (filterValue !== "" && filterValue !== undefined) {
      data = data.filter((item) => {
        if (item.itemName.toLowerCase() === filterValue.toLowerCase()) {
          return item;
        }
      });
    } else {
      data = [...original];
    }
    data = data.slice(page * 10 - 10, 10 * page);
    setTable(data);
  };

  //sorting functionality
  const sorting = () => {
    if (order === "ASC") {
      let sorted = [...original].sort((a, b) =>
        a.itemName.toLowerCase() > b.itemName.toLowerCase() ? 1 : -1
      );
      sorted = sorted.slice(page * 10 - 10, 10 * page);
      setTable(sorted);
      setOrder("DSC");
    } else {
      let sorted = [...original].sort((a, b) =>
        a.itemName.toLowerCase() < b.itemName.toLowerCase() ? 1 : -1
      );
      sorted = sorted.slice(page * 10 - 10, 10 * page);
      setTable(sorted);
      setOrder("ASC");
    }
  };

  //handle page
  const handlePageChange = (data) => {
    getData(data.selected + 1);
    setPage(data.selected + 1);
  };

  return (
    <div className="table-el">
      <div className="filter-search">
        <div className="filter-container">
          <select
            className="option-item"
            type="text"
            placeholder="filter..."
            onChange={(e) => {
              setFilterValue(e.target.value);
            }}
          >
            <option>select the value</option>
            {table.map((item) => (
              <option value={item.itemName}>{item.itemName}</option>
            ))}
          </select>
          <NormalButton
            label="Filter"
            className="filter-button"
            onClick={applyFilter}
          />
        </div>
        <div className="search-container">
          <img alt={Search} src={Search} />
          <input
            type="search"
            placeholder="SEARCH"
            onChange={(e) => {
              let value = e.target.value;
              searchElement(value);
            }}
            className="input-el"
          />
        </div>
      </div>
      <div className="table-container">
        <NormalTable
          headers={projectHeader}
          multiselect
          headerCheckbox={headerCheckbox}
          handleHeaderCheckbox={handleHeaderCheckbox}
          sortingData={sorting}
        >
          {table.length != 0 ? (
            table.map((data, index) => {
              return (
                <>
                  <tr
                    className={index % 2 === 0 ? "white-color" : "gray-color"}
                  >
                    <td>
                      <NormalCheckbox
                        name={data}
                        onChange={() => handleCheckbox(index)}
                        checked={data.isSelect}
                      />
                    </td>
                    <td>{data.itemName}</td>
                    <td className="button-text">Button</td>
                    <td className="button-text">Button</td>
                    <td className="normal-text">input data</td>
                    <td className="normal-text">input data</td>
                    <td className="normal-text ">input data</td>
                    <td className="normal-text ">input data</td>
                    <td className="normal-text ">input data</td>
                    <td className="normal-text ">input data</td>
                    <td className="normal-text ">input data</td>
                  </tr>
                  {data.isSelect === true ? (
                    data?.innerData != null ? (
                      <th colSpan={11} className="inner-table">
                        <table className="table-item">
                          <tr>
                            {innerTable.map((item, index1) => (
                              <th
                                className={
                                  index1 === 0
                                    ? "table-head inner-table-el"
                                    : "table-head"
                                }
                              >
                                {item}
                              </th>
                            ))}
                          </tr>
                          {data?.innerData.map((item, index2) => {
                            return (
                              <tr
                                className={
                                  index2 % 2 === 0
                                    ? "white-color"
                                    : "gray-color"
                                }
                              >
                                <td className="table-data">input data</td>
                                <td className="table-data">input data</td>
                                <td className="table-data">input data</td>
                                <td className="table-data">input data</td>
                                <td className="table-data">input data</td>
                                <td className="table-data">input data</td>
                                <td className="table-data">input data</td>
                                <td className="table-data">input data</td>
                                <td className="table-data">input data</td>
                              </tr>
                            );
                          })}
                          <tr>
                            <td colSpan={12} className="sub-total-container">
                              <p className="sub-total">
                                <span className="total-margin">Sub Total</span>{" "}
                                $ 0.00
                              </p>
                              <p className="sub-total">
                                <span className="total-margin">
                                  Tax (Exempt-TAX EXEMPT 0%)
                                </span>{" "}
                                $ 0.00
                              </p>
                              <p className="total">
                                <span className="total-margin">Total</span> $
                                0.00
                              </p>
                            </td>
                          </tr>
                        </table>
                      </th>
                    ) : (
                      ""
                    )
                  ) : (
                    ""
                  )}
                </>
              );
            })
          ) : (
            <NoData colSpan={11} />
          )}
        </NormalTable>
      </div>

      <div className="pagination-container">
        <Pagination
          data={original}
          pageChange={(res) => {
            handlePageChange(res);
          }}
        />
      </div>
    </div>
  );
}

export default TablePage;
