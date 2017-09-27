class MyVideosPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      videos: null
    };
    //this.updateVideos = this.updateVideos.bind(this);
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="container">
        <div className="container page-title">
          <h1 className="page-heading text-center">My Videos</h1>
        </div>
        <div className="row">

          <div className="col-lg-2">
          </div>

          <div className="col-lg-8">

          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    );
  }
}
