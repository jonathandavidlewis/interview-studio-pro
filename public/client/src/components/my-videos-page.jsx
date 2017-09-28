class MyVideosPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      videos: null
    };
    this.loadUserResponses = this.loadUserResponses.bind(this);
  }

  loadUserResponses() {

  }

  componentDidMount() {

  }
  render() {
    return (
      <div className="container">
        <div className="container page-title">
          <h1 className="page-heading text-center">My Responses</h1>
        </div>
        <div className="row">

          <div className="col-lg-2">
          </div>

          <div className="col-lg-8">
            <div className="row responses-headings">
              <span className="response-thumbnail"><img src="" alt="" className="response-thumbnail-image"/></span>
              <span className="response-question"></span>
              <span className="response-keyword-match"></span>
              <span className="question-keywords"></span>
            </div>
            <div className="row response-entry"></div>

          </div>

          <div className="col-lg-2"></div>
        </div>
      </div>
    );
  }
}
