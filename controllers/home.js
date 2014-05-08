/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.about = function(req, res) {
  res.render('about', {
    title: 'About'
  });
};

exports.news = function(req, res) {
  res.render('news', {
    title: 'News'
  });
};

/* DEAD ROUTES SPECIFIC TO PROJECT

exports.team = function(req, res) {
  res.render('team', {
    title: 'Team'
  });
};

*/

/** Application Specific Routes underneath **/

exports.workstreams = function(req, res) {
  res.render('workstreams', {
    title: 'Workstreams'
  });
};

exports.procurement = function(req, res) {
  res.render('workstreams/procurement', {
    title: 'Procurement'
  });
};

exports.sharing = function(req, res) {
  res.render('workstreams/sharing', {
    title: 'Sharing and Adopting Good Practice'
  });
};


exports.consistency = function(req, res) {
  res.render('workstreams/consistency', {
    title: 'Consistency in care'
  });
};

exports.collaborative = function(req, res) {
  res.render('workstreams/collaborative', {
    title: 'Speciality Collaborative Working'
  });
};

exports.specialist = function(req, res) {
  res.render('workstreams/specialist', {
    title: 'Specialist services'
  });
};

exports.locums = function(req, res) {
  res.render('workstreams/locums', {
    title: 'Locums'
  });
};

exports.infomatics = function(req, res) {
  res.render('workstreams/infomatics', {
    title: 'Informatics'
  });
};
