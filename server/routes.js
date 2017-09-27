const app = require('./server.js');
var router = require('express').Router();
const User = require('./app/models/user.js');
const Question = require('./app/models/question.js');
const Response = require('./app/models/response.js');


const handler = require('./handler.js');


// Route requests

router.get('/', function(req, res) {
  res.end('You got to ROOT')
});

router.get('/api/responses', handler.responses.get);

router.post('/api/responses', handler.responses.post);

router.post('/api/signup', handler.users.post);

router.post('/api/login', handler.users.post);

router.get('/api/questions', handler.users.get);


/*

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











module.exports = router;
