import React from 'react';

export default function ParagraphInfo({ bookInfos }) {
  console.log( 'bookinfo from paragraph', bookInfos)
  return (
    <div id="infoSearch">
      <div className="container formWrapper">
        
      <div className="form-text mt-3 vText">
        You found: <span><big>{bookInfos[0].numFound}</big></span> books with this searching criteria.
      </div>
    </div>
    </div>
  );
}
