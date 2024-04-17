import "./App.css";
import Table from "./components/Table";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [hostData, setHosts] = useState([]);
  const [hostIPData, setHostsIP] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //combined data

  let mergedData = [];

  hostData.forEach((interfaceData) => {
    let detailsData = hostIPData.find(
      (host) => host.hostid === interfaceData.hostid
    );

    if (detailsData) {
      console.log({ detailsData }, "tjhe data");

      let ip = detailsData.ip;
      let status = interfaceData.status;
      let host = interfaceData.host;
      let hostid = interfaceData.hostid;

      mergedData.push({ ip, status, host, hostid });
    }
  });
  console.log(mergedData, "the merged data");

  //api calls
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
    url: "/zabbix/api_jsonrpc.php",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer 21dde15c2566092e3effac499981aa4c78dff4690ba2e34256fa2b7a9f858f03",
    },
    data: data,
  };

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await axios
        .request(config)
        .then((response) => {
          // console.log(JSON.stringify(response.data), "the data....");
          setHosts(response.data?.result);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => setIsLoading(false));
    }

    fetchData();
  }, []);

  useEffect(() => {
    let data = JSON.stringify({
      jsonrpc: "2.0",
      method: "hostinterface.get",
      params: {
        output: "extend",
      },
      id: 1,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/zabbix/api_jsonrpc.php",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 21dde15c2566092e3effac499981aa4c78dff4690ba2e34256fa2b7a9f858f03",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data, "the ip data..."));
        setHostsIP(response.data?.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="root-container">
      <div className="main-container">
        {isLoading ? (
          <div className="loader">
            <h4>Loading...</h4>
          </div>
        ) : (
          <Table data={mergedData} />
        )}
      </div>
    </div>
  );
}

export default App;
