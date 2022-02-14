import React from 'react';
import ListReadWrapper from '../../components/Wrapper/ListReadWrapper';

function ReadList() {
  return (
    <div id="readList" className="container-fluid">
      <div className="wiewType container-fluid border-bottom">
        <div className="state text-center d-flex justify-content-center align-items-center">
          <h4 className="">
            READ <span>(2)</span>
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
