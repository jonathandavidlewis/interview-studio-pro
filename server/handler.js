module.exports = function() {

  const url = require('url');


  const app = require('./server.js').app;
//var router = require('express').Router();
  const User = require('./app/models/user.js');
  const Question = require('./app/models/question.js');
  const Response = require('./app/models/response.js');

// Route requests

  console.log('routes loaded');

  app.get('/api/responses', function(req, response) {

  });

  app.post('/api/responses', function(req, response) {

  });

  app.post('/api/signup', function(req, response) {

  });

  app.post('/api/login', function(req, response) {

  });

  app.post('/api/questions', function(req, res) {
    Question.sync().then(() => {
      return Question.create({
        title: req.body.title,
        questionText: req.body.questionText,
        keywords: req.body.keywords,
        maxTime: req.body.maxTime
      });
    }).then(function(question) {
      console.log('Question entry input' + JSON.stringify(question));
      res.status(201).send(question);
    });



  });

  var queryOffset = 0;

  app.get('/api/questions', function(req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

    /*Question.reset().fetch().then(function(question) {
      res.status(200).send(questions.models);
    });*/
    Question.findAll({ offset: queryOffset++, limit: 1 }).then(function(question) {
      res.send((question[0]));
      console.log('Got to questions endpoint', question[0]);
    });

  });
};


/*

Question:
id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  title: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  questionText: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  videoUrl: { type: Sequelize.STRING, allowNull: false },
  videoLoopUrl: { type: Sequelize.STRING, allowNull: false  },
  keywords: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW }







app.get('/', util.checkUser,
  function(req, res) {
    //if not logged in
    //res.render('login')
    res.redirect('index');
  });

*/

/*

app.get('/create', util.checkUser,
  function(req, res) {

    //if not logged in
    //res.render('login')
    res.render('index');
  });

app.get('/login',
  function(req, res) {
    res.render('login');
  });

app.get('/logout', util.logOutUser);

app.get('/signup',
  function(req, res) {
    res.render('signup');
  });

app.get('/links', util.checkUser,
  function(req, res) {
    //if not logged in
    //res.render('login')
    Links.reset().fetch().then(function(links) {
      res.status(200).send(links.models);
    });
  });

app.post('/links',
  function(req, res) {

    var uri = req.body.url;

    if (!util.isValidUrl(uri)) {
      console.log('Not a valid url: ', uri);
      return res.sendStatus(404);
    }

    new Link({ url: uri }).fetch().then(function(found) {
      if (found) {
        res.status(200).send(found.attributes);
      } else {
        util.getUrlTitle(uri, function(err, title) {
          if (err) {
            console.log('Error reading URL heading: ', err);
            return res.sendStatus(404);
          }

          Links.create({
            url: uri,
            title: title,
            baseUrl: req.headers.origin
          })
          .then(function(newLink) {
            res.status(200).send(newLink);
          });
        });
      }
    });
  });

/!************************************************************!/
// Write your authentication routes here
/!************************************************************!/

app.post('/signup',
  function(req, res) {
    util.createUser(req, res);
  });



app.post('/login', util.verifyUser);





/!************************************************************!/
// Handle the wildcard route last - if all other routes fail
// assume the route is a short code and try and handle it here.
// If the short-code doesn't exist, send the user to '/'
/!************************************************************!/

app.get('/!*', function(req, res) {
  new Link({ code: req.params[0] }).fetch().then(function(link) {
    if (!link) {
      res.redirect('/');
    } else {
      var click = new Click({
        linkId: link.get('id')
      });

      click.save().then(function() {
        link.set('visits', link.get('visits') + 1);
        link.save().then(function() {
          return res.redirect(link.get('url'));
        });
      });
    }
  });
});


*/













