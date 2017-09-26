class MyVideosPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      videos: null
    };
    this.updateVideos = this.updateVideos.bind(this);
  }
  componentDidMount() {
    this.getVideos('queryString');
  }
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchYouTube={this.searchYouTube.bind(this)} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList selectVideo={this.selectVideo} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}
