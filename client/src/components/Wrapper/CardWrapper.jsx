import { useContext } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import Card from '../Card/Card';
import { Carousel } from '3d-react-carousal';

const slides = [<Card />, <Card />, <Card />, <Card />, <Card />];

export default function CardWrapper() {
  /*   const { onClickFetchData, bookInfos } = useContext(BookContext);
  console.log(bookInfos); */

  return (
    <div className="" id="carousel">
      <Carousel slides={slides} autoplay={false} interval={1000} />
    </div>

    /*     <div className='d-flex justify-content-evenly col'>
      {bookInfos.map((item, index) => (
        <Card item={item} id={index}></Card>
      ))}
    </div> */
  );
}
