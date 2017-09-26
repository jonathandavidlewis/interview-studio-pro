var Navbar = (props) => (
  <div clasName="container">
    <nav id="mainNav" clasName="navbar navbar-default navbar-fixed-top navbar-custom visible-lg-inline-block">
      <div clasName="container">
        <div clasName="navbar-header page-scroll">
          <button type="button" clasName="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span clasName="sr-only">Toggle navigation</span> Menu <i clasName="fa fa-bars"></i>
          </button>
          <a clasName="navbar-brand" href="#page-top">Interview Studio Pro</a>
        </div>
        <div clasName="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul clasName="nav navbar-nav navbar-right">
            <li clasName="">
              <a href="/">Home</a>
            </li>
            <li clasName="">
              <a href="/signup">Signup</a>
            </li>
            <li clasName="">
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);
