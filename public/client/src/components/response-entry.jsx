var ResponseEntry = (props) => (
  <div className="row response-entry text-center">
    <div className="col-lg-3 response-item response-thumbnail"><img src={props.imageSrc} alt=""/></div>
    <div className="col-lg-3 response-item response-question"><h4>{props.responseText}</h4></div>
    <div className="col-lg-3 response-item response-keyword-match"><h4>{props.keywordMatch}</h4></div>
    <div className="col-lg-3 response-item question-keywords"><h4>{props.keywords}</h4></div>
  </div>
);


/*
Response:
  id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  responseText: { type: Sequelize.STRING, allowNull: false, defaultValue: '' },
  keywordMatch: { type: Sequelize.STRING, allowNull: false },
  stars: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
  videoUrl: { type: Sequelize.STRING, allowNull: true },
  duration: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 30 },
  createdAt: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  thumbnailUrl: { type: Sequelize.STRING, allowNull: true defaultValue: 'img/default-response-thumb.jpg'}








*/
