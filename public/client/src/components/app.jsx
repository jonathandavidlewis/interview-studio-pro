class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      video: null
    };
    this.updateVideos = this.updateVideos.bind(this);
  }
  selectVideo(video) {
    this.setState({
      video: video
    });
  }
  updateVideos(videos) {
    this.setState({
      videos: videos,
      video: videos[0]
    });
  }
  handleSearchResponse(response) {
    this.setState();
  }
  searchVideos(searchRequest) {
    this.props.searchVideos(options, this.updateVideos);
  }

  componentDidMount() {
    this.searchVideos('puppies');
  }
  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
  }
}





/*
<!-- var App = (props) => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
        <Search/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
        <VideoPlayer video={window.videoData[0].id.videoId}/>
      </div>
      <div className="col-md-5">
        <VideoList array={window.videoData}/>
      </div>
    </div>
  </div>
); -->*/

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
