import React from 'react';
import ListCard from '../../components/Card/ListCard'
import ListCardToRead from '../../components/Card/ListCardToRead';


function ToReadList() {
  return (
  <div id='readList' className='container-fluid'>
  <div className='wiewType container-fluid border-bottom'>
    <div className='state text-center d-flex justify-content-center align-items-center'>
        <h4 className=''>TO READ <span>(16)</span></h4>
    </div>
    <div className='mt-4 mb-4'>
    <h5 className='h55'>Click on cover for detailed description:</h5>
    </div>
  </div>

  <div id='' className='container-fluid'>
      <ListCardToRead />
            <ListCardToRead />
      <ListCardToRead />
      <ListCardToRead />
      <ListCardToRead />

  </div>

  </div>
  );
}

export default ToReadList;
