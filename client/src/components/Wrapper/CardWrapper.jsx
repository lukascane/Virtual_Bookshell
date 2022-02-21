import { useContext } from 'react';
import BookContext from '../../context/booksContextApi/BookContext';
import Card from '../Card/Card';
import { Carousel } from '3d-react-carousal';
import AlertContext from '../../context/AlertContext';



export default function CardWrapper() {
  const { showAlert, onClickShowAlert, currentAlertType } =
    useContext(AlertContext);
  const { bookInfos } = useContext(BookContext);
  console.log(bookInfos.length, 'hello cardwrapper')
  const slidesTwo = bookInfos.map((item, index) => (
    <Card item={item} id={index}></Card>
  ));

  return (
    <div id="carousel" className="vh-100" style={{ marginTop: '100px' }}>
      <Carousel slides={slidesTwo} autoplay={false} interval={1000}></Carousel>
    </div>
  );
}
