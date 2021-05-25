import React from "react";
import "./styles.css";

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Chapter</th>
          <th>Content</th>
        </tr>
      </thead>
      <tbody>
        {data ? (
          <RenderTableData data={data} />
        ) : (
          <tr>
            <td>No data available</td>
            <td>No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

function RenderTableData({ data }) {
  return (
    <>
      {data.map((item) => (
        <tr>
          <td>{item.chapter}</td>
          <td>{item.content}</td>
        </tr>
      ))}
    </>
  );
}

export default Table;
