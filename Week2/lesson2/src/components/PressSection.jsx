import React from 'react';
import '../css/PressSection.css';
import logo1 from "../assets/logo/logo1.png"

const PressSection = () => {
  const articles = [
    {
      id: 1,
      logo: logo1,
      source: 'TED TALKS',
      date: '2.22.22',
      title: 'Meet the 2022 class of TED Fellows'
    },
    {
      id: 2,
      logo: 'path/to/correctional-news-logo.png',
      source: 'CORRECTIONAL NEWS',
      date: '2.2.22',
      title: 'New Partnership Aims to Help Transform Prison Conditions'
    },
    {
      id: 3,
      logo: 'path/to/department-of-justice-logo.png',
      source: 'DEPARTMENT OF JUSTICE',
      date: '1.26.22',
      title: 'Justice Department Establishes Initiative to Strengthen States’ Use of Criminal Justice Data'
    },
    {
      id: 4,
      logo: 'path/to/new-york-times-logo.png',
      source: 'THE NEW YORK TIMES',
      date: '12.27.21',
      title: 'The 2021 Good Tech Awards'
    },
    {
      id: 5,
      logo: 'path/to/corrections1-logo.png',
      source: 'CORRECTIONS1',
      date: '11.18.21',
      title: 'Maine DOC to better harness correctional data to improve outcomes'
    },
    {
      id: 6,
      logo: 'path/to/right-on-crime-logo.png',
      source: 'RIGHT ON CRIME',
      date: '9.9.21',
      title: 'Together, We Can Make Mississippi Safer and Reentry-Ready'
    }
  ];

  return (
    <div className="press-section">
      <h1>Recidiviz in the Press</h1>
      <div className="articles">
        {articles.map(article => (
          <div key={article.id} className="article">
            <div className="article-header">
              <img src={article.logo} alt={`${article.source} logo`} />
              <div className="article-info">
                <span>{article.source}</span>
                <span>{article.date}</span>
              </div>
            </div>
            <p>{article.title}</p>
          </div>
        ))}
      </div>
      <button className="see-all-button">See All</button>
    </div>
  );
};

export default PressSection;
