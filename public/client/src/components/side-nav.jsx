var Sidenav = (props) => (
<div className="sidenav">
  <span className="open-side-nav">&#9776;</span>
  <a href="#" onClick={() => props.setMainPage('InterviewPage') }>Home</a>
  <a href="#" onClick={() => props.setMainPage('ResponsesPage') }>Your Responses</a>
  <a href="#">Search Responses</a>
  <a href="#">Give Feedback</a>
</div>
);
