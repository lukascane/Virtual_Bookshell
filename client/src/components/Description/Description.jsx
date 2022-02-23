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
        .then((response) => {
          const data = response.data;
          console.log(data,'im data')
          if(data.description !== null){
            if(typeof data.description === 'object'){
              setDescription(data.description.value)
            }else if (data.description) {
              setDescription(data.description)
            }else {
              return setDescription('NO DESCRIPTION TEXT: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat consequat arcu sit amet rhoncus. Sed ligula augue, efficitur ut varius a, faucibus vel lacus. Ut congue magna quis massa luctus scelerisque.')
            }
          } else {
            return setDescription('NO DESCRIPTION TEXT: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris volutpat consequat arcu sit amet rhoncus. Sed ligula augue, efficitur ut varius a, faucibus vel lacus. Ut congue magna quis massa luctus scelerisque.')
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
