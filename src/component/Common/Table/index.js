import React from "react";
import Table from "react-bootstrap/Table";
import classes from "./styles.module.scss";
import NormalCheckbox from "../NormalCheckbox";
const NormalTable = (props) => {
  const {
    sortingData,
    headers,
    children,
    styles = {},
    className,
    isCenter = false,
    multiselect,
    headerCheckbox,
    handleHeaderCheckbox,
    centered = false,
    setwidth = false,
  } = props;

  return (
    <div
      style={styles}
      className={`${classes.overAllTable} ${isCenter && classes.center} ${
        centered && classes.alignCenter
      }`}
    >
      <Table
        className={`${classes.normalTable} mb-1 mt-1` + className}
        responsive
      >
        <thead>
          <tr>
            {multiselect && (
              <th>
                <NormalCheckbox
                  name="selectAll"
                  onChange={handleHeaderCheckbox}
                  checked={headerCheckbox}
                />
              </th>
            )}
            {headers.map((header, index) => {
              return (
                <th
                  className={index === 0 ? `${classes.headerStyle}` : ""}
                  key={index}
                  onClick={sortingData}
                >
                  {header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </Table>
    </div>
  );
};

export default NormalTable;
