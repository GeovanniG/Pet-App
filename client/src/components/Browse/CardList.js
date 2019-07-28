import React, { useState, useEffect } from 'react';
import Card from './Card';
import getToken from '../../token/getToken';

const CardList = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
      const getAnimals = async () => {
        const token = await getToken();
        // const totalPages = 1001169;
        const totalPages = 1000;
        const page = Math.floor(Math.random() * totalPages) + 1;
        const perPageMax = 8;
        const limit = Math.floor(Math.random() * perPageMax) + 1;
        try {
          const res = await fetch(`https://api.petfinder.com/v2/animals?type=dog&limit=${limit}&page=${page}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          const body = await res.json();
          setAnimals(body.animals);
        } catch (e) {
          // setAnimals('Unable to retrieve animal')
        }
      }

      getAnimals();
    } , [])

    return (
        <div className="cards">
          {animals.length > 0 ? animals.map((animal, i) => <Card {...animal} key={i} />) : <p>Give us a sec, we're coming</p>}
        </div>
    )
}

export default CardList;