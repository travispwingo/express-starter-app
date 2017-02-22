function example (req, res, next) {
  res.render('example', {
    title: 'My example title'
  });
}

module.exports = {
  example: example
};