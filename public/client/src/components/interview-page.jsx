class InterviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      question: '',
      response_text: '',
      keywords: 'javascript'
    };
    this.loadQuestion = this.loadQuestion.bind(this);
    this.fetchQuestion = this.fetchQuestion.bind(this);
  }

  loadQuestion(question) {
    this.setState({
      question: question
    });
  }

  fetchQuestion(event) {
    $.ajax({
      url: '/api/questions',
      type: 'GET',
      data: {userToken: '', keywords: this.state.keywords, maxResults: 1, sort: 'random'},
      dataType: 'application/json',
      success: function (data) {
        console.log('get data', data);
        this.loadQuestion(data);
      },
      error: function (data) {
        console.error('chatterbox: Failed to receive message', data);
      }
    });
  }

  componentDidMount() {
    this.fetchQuestion('javascript');
  }
  render() {
    return (
      <div className="container">
        <div className="container page-title">
          <h1 className="page-heading text-center">Interview practice</h1>
        </div>
        <div className="row">

          <div className="col-lg-2">
          </div>

          <div className="col-lg-8">

            <div className="question-header-container"><span className="question-header"><h2 className="question-header-text text-center">Question</h2></span></div>
            <hr />
              <div className="question-prompt-container"><span className="question-prompt"><h3 className="question-prompt-text text-center">What did you learn yesterday/this week?</h3></span></div>
              <div className="jumbotron main-video-container">
                <canvas id="user-video" className="interviewer-video"  width="320" height="240"></canvas>
              </div>
              <div className="time-target-notification-container"><span className="time-target-notification"></span></div>
              <div className="record-controls-container">
                <div className="row">
                  <div className="col-lg-12 btn-record record btn btn-success">
                    <span className="record-button-text record">Start recording</span>
                  </div>
                </div>
              </div>
              <div className="row next-question-container">
                <br />
                  <div className="col-lg-6"></div>
                  <div className=" col-lg-6 btn btn-default next-question" onClick={this.fetchQuestion}>
                    <span className="next-question-label">Next question</span>
                  </div>
                  <div className="interim-response-text container-fluid">
                    <span className="interim-result"></span>
                  </div>
                  <div className="final-response-text container-fluid">
                    <span className="final-result"></span>
                  </div>
              </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
      </div>
    );
  }
}


