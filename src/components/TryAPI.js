import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TryAPI() {
  const [data, setData] = useState({ data: [], metadata: { id: '', name: '' } });
  // const [toggle, setToggle] = useState(true);
  // const [query, setQuery] = useState('');

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(`https://tidesandcurrents.noaa.gov/api/datagetter?date=latest&station=8665530&product=water_level&units=english&time_zone=lst&datum=MLLW&application=web_services&format=json`);

        // console.log(response.data);

        setData(response.data);
      } catch (error) {
        console.log(error.message)
      }
    }
    getData();
  }, []);

  console.log(data)

  return (
    <section>
      {data.data.map(el => {
        return (
          <div>{el.t}</div>
        );
      })}
      <p>{data.metadata.name}</p>
    </section>
  );
}

export default TryAPI;