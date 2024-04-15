import React from "react";
import styles from "./Table.module.css";

const Table = ({ data }) => {
  return (
    // <div className={styles.tableContainer}>
    //   <table className={styles.table}>
    //     <thead>
    //       <tr>
    //         <th>Hostname</th>
    //         <th>IP</th>
    //         <th>Status</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {data.map((row, index) => (
    //         <tr key={index}>
    //           <td>{row.hostname}</td>
    //           <td>{row.ip}</td>
    //           <td
    //             className={
    //               row.status === "Online"
    //                 ? styles.statusOnline
    //                 : styles.statusOffline
    //             }
    //           >
    //             {row.status}
    //           </td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

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
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.hostname}</td>
                <td>{row.ip}</td>
                <td
                  className={
                    row.status === "Online"
                      ? styles.statusOnline
                      : styles.statusOffline
                  }
                >
                  {row.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Table;
