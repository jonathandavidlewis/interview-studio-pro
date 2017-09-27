var Navbar = (props) => (
  <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">Interview Studio Pro</a>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home</a></li>
        <li><a href="#" onClick={() => props.setMainPage('InterviewPage') }>Interview Practice</a></li>
        <li><a href="#" onClick={() => props.setMainPage('ResponsesPage') }>My Responses</a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={() => props.setMainPage('Signup')}><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="#" onClick={() => props.setMainPage('Login')}><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </nav>
);
