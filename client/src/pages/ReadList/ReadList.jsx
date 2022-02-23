import React, { useContext, useState } from 'react';
import AlertAddedReadList from '../../components/ParagraphInfo/AlertAddedReadList'
import AlertRemovedFromReadList from '../../components/ParagraphInfo/AlertRemovedFromReadList';
import ListReadWrapper from '../../components/Wrapper/ListReadWrapper';
import AlertContext from '../../context/AlertContext';

function ReadList(item) {
  const { showAlert, currentAlertType } = useContext(AlertContext)
  console.log(item)
  const [counter, setCounter] = useState(0)
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div id="readList" className="container-fluid">
      <div className="wiewType container-fluid border-bottom">

      <div className='container'>
              {showAlert === true && currentAlertType === 0 ? <AlertRemovedFromReadList /> : null}
              {showAlert === true && currentAlertType === 1 ?  <AlertAddedReadList /> : null }
      </div>

        <div className="state text-center d-flex justify-content-center align-items-center">
          <h4 className="">
            READ <span>({counter})</span>
          </h4>
        </div>
        <div className="mt-4 mb-4">
          <h5 className="h55">Click on cover for detailed description:</h5>
        </div>
      </div>

      <div id="listCardContiner" className="container-fluid">
        <ListReadWrapper></ListReadWrapper>
      </div>
    </div>
  );
}

export default ReadList;
