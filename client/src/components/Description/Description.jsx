import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import descriptionAxiosInstance from '../../util/descriptionAxiosInstance';
import BookContext from '../../context/booksContextApi/BookContext';

function Description(props) {
  const { bookInfos } = useContext(BookContext);
  const [description, setDescription] = useState('');

  // console.log(props);

  const listBooks = async () => {
    const response = await axios.get(`http://localhost:3001/api/books/list`);
    console.log(response.data);
  };

  const fetchData = () => {
    // try {
    //   const response = await axios.get(
    //     'https://openlibrary.org/works/OL45883W'
    //   );
    //   console.log(response.data);
    // } catch (error) {
    //   console.log('Could not get data');
    // }

    // axios
    //   .get('https://openlibrary.org/works/OL45883W')
    return (
      descriptionAxiosInstance
        //   .get()
        .get(`/`)
        .then((response) => {
          const data = response.data;

          console.log(data);

          return setDescription(data);
        })
        .catch((err) => {
          return { error: err };
        })
    );
    // );

    // return descriptionAxiosInstance.get(`/works/OL45883W`)
    //     .then((response) => {
    //   const data = response.data;}

    // console.log(response.data);
    // setDescription(response.data.description);
    // console.log('Description: ', description);
    // setDescription(response.data.description);
  };
  useEffect(() => {
    fetchData();
    // listBooks();
  }, []);

  return (
    <div>
      <p>{description}</p>
      <p>Test</p>
    </div>
  );
}

export default Description;
