import React from "react";

const DataTable = ({ data, onAction, hasActions = false, loading = false }) => {
  const tableHeaders = Object.keys(data[0]);

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            {tableHeaders?.map(
              (header, index) =>
                header !== "Actions" && <th key={index}>{header}</th>
            )}
            {hasActions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tableHeaders?.map(
                (header, colIndex) =>
                  header !== "Actions" && <td key={colIndex}>{row[header]}</td>
              )}
              {hasActions && (
                <td>
                  <div className="d-flex flex-row m-2">
                    {row?.Actions?.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        className="btn btn-primary btn-sm me-2"
                        onClick={() => onAction(row, option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
