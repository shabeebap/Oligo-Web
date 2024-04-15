import "./App.css";
import Table from "./components/Table";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [hostData, setHosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let data = JSON.stringify({
      jsonrpc: "2.0",
      method: "host.get",
      params: {
        filter: {},
      },
      id: 1,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://oligolabs.ae/zabbix/api_jsonrpc.php",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 21dde15c2566092e3effac499981aa4c78dff4690ba2e34256fa2b7a9f858f03",
      },
      data: data,
    };

    const fetchData = () => {
      setIsLoading(true);
      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data), "the data....");
          setHosts(response.data?.result);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setIsLoading(false));
    };
    fetchData();
  }, []);

  return (
    <div className="root-container">
      <div className="main-container">
        {isLoading ? (
          <div className="loader">
            <h4>Loading...</h4>
          </div>
        ) : (
          <Table data={hostData} />
        )}
      </div>
    </div>
  );
}

export default App;
