import React, { useContext } from 'react';
import ListCard from '../../components/Card/ListCard';
import ListCardToRead from '../../components/Card/ListCardToRead';
import AlertAddedToReadList from '../../components/ParagraphInfo/AlertAddedToReadList';
import AlertRemovedFromToReadList from '../../components/ParagraphInfo/AlertRemovedFromToReadList';
import ListToReadWrapper from '../../components/Wrapper/ListToReadWrapper';
import AlertContext from '../../context/AlertContext';
import BookContext from '../../context/booksContextApi/BookContext';

function ToReadList() {
  const { showAlert, currentAlertType } = useContext(AlertContext);
  const { readList } = useContext(BookContext);

  return (
    <div id="readList" className="container-fluid">
      <div className="wiewType container-fluid border-bottom">
        <div className="container">
          {showAlert === true && currentAlertType === 2 ? (
            <AlertAddedToReadList />
          ) : null}
          {showAlert === true && currentAlertType === 3 ? (
            <AlertRemovedFromToReadList />
          ) : null}
        </div>
        <div className="state text-center d-flex justify-content-center align-items-center">
          <h4 className="">
            TO READ <span>{readList.length}</span>
          </h4>
        </div>
        <div className="mt-4 mb-4">
          <h5 className="h55">Click on cover for detailed description:</h5>
        </div>
      </div>

      <div id="" className="container-fluid">
        <ListToReadWrapper></ListToReadWrapper>
      </div>
    </div>
  );
}

export default ToReadList;
