import React, { useEffect } from "react";
import styles from "./Table.module.css";
import axios from "axios";

const Table = ({ data }) => {
  return (
    <div className={styles.tableContainer}>
      <h1>HOST Information</h1>
      <div className={styles.tableHeader}>
        <table cellpadding="0" cellspacing="0" border="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Hostname</th>
              <th>IP</th>
              <th>Status</th>
            </tr>
          </thead>
        </table>
      </div>

      <div className={styles.tableContent}>
        <table cellpadding="0" cellspacing="0" border="0">
          {data.length > 0 ? (
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row.hostid}</td>
                  <td>{row.host}</td>
                  <td>{row.ip}</td>
                  <td
                    className={
                      row.status === "0"
                        ? styles.statusOnline
                        : styles.statusOffline
                    }
                  >
                    {row.status === "0" ? "Enabled" : "Disabled"}
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <div className={styles.noText}>
              <h4>No Data Available...</h4>
            </div>
          )}
        </table>
      </div>
    </div>
  );
};
export default Table;
