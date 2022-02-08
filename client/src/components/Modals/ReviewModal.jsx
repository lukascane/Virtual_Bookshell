import React from 'react';
import CommentReview from './CommentReview';

export default function ReviewModal() {
  return (
    <div id="mask">
      <div id="bookModalContainer2" className="mb-5">
        <button className="closeButton d-flex justify-content-center align-items-center fixed-top">
          X
        </button>

        <div
          id="bookModal2"
          className="d-flex justify-content-center align-items-center row"
        >
          <div className="textContainer mt-3">
            <div
              data-bs-spy="scroll"
              data-bs-target="#list-example"
              data-bs-offset="0"
              className="rounded scrollspy-example mt-3 textScroll p-3"
              tabindex="0"
            >
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source. Lorem
                Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                written in 45 BC. This book is a treatise on the theory of
                ethics, very popular during the Renaissance. The first line of
                Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in section 1.10.32. The standard chunk of Lorem Ipsum used since
                the 1500s is reproduced below for those interested. Sections
                1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
                Cicero are also reproduced in their exact original form,
                accompanied by English versions from the 1914 translation by H.
                Rackham.Contrary to popular belief, Lorem Ipsum is not simply
                random text. It has roots in a piece of classical Latin
                literature from 45 BC, making it over 2000 years old. Richard
                McClintock, a Latin professor at Hampden-Sydney College in
                Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32. The standard chunk of
                Lorem Ipsum used since the 1500s is reproduced below for those
                interested. Sections 1.10.32 and 1.10.33 from "de Finibus
                Bonorum et Malorum" by Cicero are also reproduced in their exact
                original form, accompanied by English versions from the 1914
                translation by H. Rackham.{' '}
              </p>
            </div>

            <div
              className="card-body d-flex justify-content-start align-items-center"
              style={{ marginLeft: '-20px' }}
            >
              <a href="#" className="btn btLink m-2">
                comment/review
              </a>
            </div>

            <hr />
          </div>
          <div
            id="commentContainer"
            className="d-flex justify-content-center row align-items-center"
          >
            <CommentReview />
            <CommentReview />
            <CommentReview />
          </div>
          <div
            className="card-body d-flex justify-content-start align-items-center mb-2"
            style={{ maxWidth: '93%' }}
          >
            <a href="#" className="btn btLink m-2">
              back
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
