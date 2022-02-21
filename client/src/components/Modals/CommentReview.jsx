import React from 'react';

export default function CommentReview() {
  const s = new Date().toLocaleDateString('en-GB');

  return (
    <div id="comment" className="mt-2 mb-2">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-start align-items-center">
          <h4
            className="align-self-center userNameComment"
            style={{ marginBottom: '0px' }}
          >
            USER_NAME
          </h4>
          <div>
            <button
              className="closeButton d-flex justify-content-center align-items-center fixed-top"
              style={{ marginLeft: '-10px' }}
            >
              X
            </button>
          </div>
        </div>
        <span className="align-self-center">{s}</span>
      </div>
      <br />
      <p>
        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced
        below for those interested. Sections 1.10.32 and 1.10.33 from "de
        Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
        original form, accompanied by English versions from the 1914 translation
        by H. Rackham.
      </p>
    </div>
  );
}
