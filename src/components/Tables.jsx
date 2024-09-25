import React, { useState, useEffect } from 'react'
import { getCurr } from "../api/currencyApi"

export default function Table(){
  const [currData, setCurrData] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  const tempCurr = ["CAD", "IDR", "JPY", "CHF", "EUR", "USD"];

  useEffect(() => {
    getCurr().then((res) => {
      setCurrData(res);
      const filteredData = Object.entries(res.data.rates).filter(([key]) =>
        tempCurr.includes(key)
      );
      setFilteredData(filteredData);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  

  return (
    <>
    <div className="container">
        <table>
          <thead>
            <tr>
              <th>CURR</th>
              <th>WE BUY</th>
              <th>EXCHANGE RATE</th>
              <th>WE SELL</th>
            </tr>
          </thead>
          <tbody>
          {filteredData.map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{(value * 1.02).toFixed(4)}</td>
                <td>{(value - 0).toFixed(4)}</td>
                <td>{(value * 0.98).toFixed(4)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

  <div className="footnote">
<p>Rimba Sahara</p>
</div></>
);
}
  
    
  