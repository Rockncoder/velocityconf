
/*
 * GET layers page.
 */

exports.list = function(req, res){
  res.render('layers', { title: 'The Rockncoder' });
};