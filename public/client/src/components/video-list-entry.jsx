var VideoListEntry = (props) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={() => props.selectVideo(props.video) }>{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>
);


/*
class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    // This binding is necessary to make `this` work in the callback
    //this.handleClick = this.handleClick.bind(this);
  }

 handleClick(event) {
    event.preventDefault();
    this.props.selectVideo(this.props.video)
    //this.setState(prevState => ({
    //  isToggleOn: !prevState.isToggleOn
    //}));


  render() {
    return (
     <div className="video-list-entry media">
     <div className="media-left media-middle">
      <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={ () => this.props.selectVideo(this.props.video) }>{this.props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
    </div>
  </div>
    );
  }
}



*/


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
