import React from 'react';

export default function ListCard() {
  return  <div id="listCard">
  <div className="col-xs-12 col-md-6">
     <div className="product-content product-wrap clearfix">
          <div className="row">
                  <div className="col-md-5 col-sm-12 col-xs-12">
                      <div className="product-image"> 
                          <img src="https://covers.openlibrary.org/b/id/8166951-M.jpg" alt="194x228" className="img-responsive"/>   
                      </div>
                  </div>
                  <div className="col-md-7 col-sm-12 col-xs-12">
                  <div className="product-deatil">
                          <h5 className="name">
                              <a href="#">
                                  Product Name Title Here <span>Category</span>
                              </a>
                          </h5>
                          <p className="price-container">
                              <span>$99</span>
                          </p>
                          <span className="tag1"></span> 
                  </div>
                  <div className="description">
                      <p>Proin in ullamcorper lorem. Maecenas eu ipsum </p>
                  </div>
                  <div className="product-info smart-form">
                      <div className="row">
                      <div className="button">
      <a href="#" className="btn cardBtn homeBtn btn-sm">List to read</a>
      <a href="#" className="btn cardBtn homeBtn btn-sm">Review</a>
      <a href="#" className="btn cardBtn homeBtn btn-sm">Read/+Collection</a>
      </div>
                          <div className="col-md-6 col-sm-6 col-xs-6">
                              <div className="rating">
                                  <label for="stars-rating-5"><i className="fa fa-star"></i></label>
                                  <label for="stars-rating-4"><i className="fa fa-star"></i></label>
                                  <label for="stars-rating-3"><i className="fa fa-star text-primary"></i></label>
                                  <label for="stars-rating-2"><i className="fa fa-star text-primary"></i></label>
                                  <label for="stars-rating-1"><i className="fa fa-star text-primary"></i></label>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
     
</div>
</div>
}
