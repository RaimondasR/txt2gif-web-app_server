module.exports = {
  validateText: async (req, res, next) => {
    const { submittedText } = req.body;

    if (submittedText.length < 2 || submittedText.length > 250) {
      return res.send({
        success: false,
        message: "Error: submitted text length should be from 2 to 250 characters."
      });
    }
    next();
  }
};
