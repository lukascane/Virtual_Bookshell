const Review = require('./../Models/ReviewSchema');

exports.createReview = async (req, res) => {
  try {
    const review = new Review();
    //! here should be the ref to the user
    review.user = req.body.user;
    review.review = req.body.review;

    await review.save();
    return res.status(200).json({ message: 'Review created' });
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'Something went wrong creating the user', error });
  }
};

exports.listReview = async (req, res) => {
  try {
    const review = await Review.find();
    return res.status(200).json({ message: 'list of reviews', review });
  } catch (error) {
    return res.status(400).json({ message: 'Error happened' });
  }
};
