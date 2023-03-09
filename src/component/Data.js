import React, { useState, useEffect } from 'react'
import Card from './Card';
import './Data.css';
import Title from './Title';

export default function Data() {

  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const final = await res.json();
    setData(final.statewise);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <marquee><h2>🔴 COVID-19 TRACKER 🔴</h2></marquee>
      {data.map((data) => {
        return (
          <>
            <Title data={data} />
            <Card data={data} />
          </>
        )
      })}
    </>
  )
}
