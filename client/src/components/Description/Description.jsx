import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import descriptionAxiosInstance from '../../util/descriptionAxiosInstance';

function Description({ item }) {
  const [description, setDescription] = useState('');

  console.log(item);

  const fetchData = () => {
    return (
      descriptionAxiosInstance
        .get(`${item}.json`)
        // .get('/works/OL45883W.json')
        .then((response) => {
          const data = response.data;

          if (data.description !== undefined) {
            setDescription(data.description);
          } else if (data.description === {}) {
            return setDescription('No text here');
          } else {
            return setDescription('No text');
          }
        })
        .catch((err) => {
          return { error: err };
        })
    );
    // );
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <div>{<p>{description}</p>}</div>;
}

export default Description;
