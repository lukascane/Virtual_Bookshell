import React from 'react';
import ErrorModal from '../../components/Modals/ErrorModal';

function NotFound() {
  return (
    <div id="errorview">
      <div className="container" style={{ marginTop: '130px' }}>
        <ErrorModal />
      </div>
    </div>
  );
}

export default NotFound;

// function NotFound() {
//   return (
//     <div id="errorview">
//       <div className="container" style={{ marginTop: '130px' }}>
//         <NotFound />
//       </div>
//     </div>
//   );
// }

// export default NotFound;
