module.exports = {
  validateText: async (req, res, next) => {
    const { textEntered } = req.body;

    if (textEntered.length < 2 || textEntered.length > 250) {
      return res.send({
        success: false,
        message: "error: submitted text length should be 2 .. 250 characters",
      });
    }
    next();
  }
};
