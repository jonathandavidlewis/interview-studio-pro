var Signup = (props) => (
  <div className="container">
    <div className="form-top-space"></div>
    <form className="form-horizontal" action="" method="POST">
      <fieldset>
        <div id="legend">
          <h2 className="form-signin-heading">Register</h2>
        </div>
        <div className="control-group">
          {/*<!-- Username -->*/}
          <label for="username" className="sr-only">Username</label>
          <input type="email" id="inputEmail" className="form-control" name="username" placeholder="Username" required="" autofocus="" />
        </div>

        <div className="control-group">
          {/*<!-- E-mail -->*/}
          <label for="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" name="email" placeholder="Email address" required="" autofocus="" />
        </div>

        <div className="control-group">
          {/*<!-- Password-->*/}
          <label for="password" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" name="password" placeholder="Password" required="" />
        </div>

        <div className="control-group">
          {/*<!-- Password -->*/}
          <label for="password_confirm" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" name="password" placeholder="Confirm your password" required="" />
        </div>

        <div className="control-group">
          {/*<!-- Button -->*/}
          <div className="controls">
            <button className="btn btn-lg btn-success btn-block">Register</button>
          </div>
        </div>
      </fieldset>
    </form>
  </div>
);
