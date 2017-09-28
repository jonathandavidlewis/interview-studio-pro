class ResponsesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      responses: []
    };
    this.loadResponses = this.loadResponses.bind(this);
  }

  loadResponses() {
    //get call providing username,
  }

  componentDidMount() {
    this.loadResponses();

  }
  render() {
    return (
      <div className="container">
        <div className="container page-title">
          <h1 className="page-heading text-center">My Responses</h1>
        </div>
        <div className="row">

          <div className="col-lg-2"></div>

          <div className="col-lg-8 response-table">
            <div className="row responses-headings text-center">
              <div className="col-lg-3 response-header response-thumbnail-header"><h4>Response</h4></div>
              <div className="col-lg-3 response-header response-question"><h4>Question</h4></div>
              <div className="col-lg-3 response-header response-keyword-match"><h4>Keyword match</h4></div>
              <div className="col-lg-3 response-header question-keywords"><h4>Keywords</h4></div>
            </div>
            <hr />
            <ResponseEntry imageSrc='../img/default-response-thumb.jpg' responseText="What is a potential pitfall with using typeof bar === 'object' to determine if bar is an object? How can this pitfall be avoided?" keywordMatch={"36%"} keywords={"Javascript null object is equal to"}/>
            <ResponseEntry imageSrc='../img/default-response-thumb2.jpg' responseText="What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?" keywordMatch={"20%"} keywords={"scope closure private namespace naming conflict global variables variable let"}/>
            <ResponseEntry imageSrc='../img/default-response-thumb3.jpg' responseText="What is the significance, and what are the benefits, of including 'use strict' at the beginning of a JavaScript source file?" keywordMatch={"26%"} keywords={"Javascript errors error handling throw failed silently strict mode debugging global var this coercion delete duplicate property names"}/>
            <ResponseEntry imageSrc='../img/default-response-thumb4.jpg' responseText="What is NaN? What is its type? How can you reliably test if a value is equal to NaN?" keywordMatch={"34%"} keywords={"\"not a number non-numeric string boolean operation type compared to anything false in not a number\""}/>

          </div>

          <div className="col-lg-2"></div>
        </div>
      </div>
    );
  }
}
