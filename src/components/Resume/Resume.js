import React from 'react';
import './resume.scss';

class Resume extends React.Component {
  render(){
    return(
    <div className="content__wrapper">
      <div className="content">
          <div className="content__tag-wrapper">
            <h1 className="content__tag">experience</h1>
          </div>
          <div className="content__inner">
            <div className="experience">
              <h3 className="experience__agency"><a className="blurb" href="http://www.complex.com/" target="_blank">Complex Networks</a></h3>
              <p className="experience__time">{"April 2015 - present"}</p>
              <p className="experience__role">{"Jr. Marketing Web Developer"}</p>
              <p className="experience__description">Part of the marketing front-end web development team focusing
on development, maintenance, and enhancement of the existing
advertising and promotional websites on desktop and mobile using
Have created and managed over 100 ad campaigns and was the only one in my team to build the most
amount of ad campaigns for the last quarter of 2016, fast and error free. Lead and keep track of our Research and Development team meetings where we brainstorm ideas for building new ads, such as new ad sizes for desktop and mobile, best way to deliver ads to the user without hiding the content of the page, and unique ad animations.</p>
            </div>
            <div className="experience">
              <h3 className="experience__agency"><a className="blurb" href="https://www.emagid.com/" target="_blank">eMagid</a></h3>
              <p className="experience__time">{"August 2014 - March 2015"}</p>
              <p className="experience__role">{"Internship"}</p>
              <p className="experience__description">Worked along side the web developers to build websites for our
            clients in MVC Framework, it included building the front-end and
            setting up the backend database. Maintained and updated codes
            for any changes made to the existing websites and performed QA.</p>
            </div>
            <div className="experience">
              <h3 className="experience__agency"><a className="blurb" href="https://www.leftforum.org/" target="_blank">CUNY Graduate Center, Left Forum</a></h3>
              <p className="experience__time">{"May 2014 - August 2014"}</p>
              <p className="experience__role">{"Internship"}</p>
              <p className="experience__description">Participated in building and transitioning Left Forum website from
            Drupal 6 to Drupal 7. Part of the transition included installing and
            manually coding the required modules, themes, and libraries.
            Correspondingly, I set up and configured events in CiviCRM
            database system and worked on the panel submission module and
            content type</p>
            </div>
          </div>
      </div>
      <div className="content">
        <div className="content__tag-wrapper">
          <h1 className="content__tag">education</h1>
        </div>
        <div className="content__inner">
          <div className="education">
            <p className="education__name">{"John Jay College of Criminal Justice"}</p>
            <p className="education__degree">{"B.S., Computer Information Systems | 2009 - 2014"}</p>
            <p className="education__location">{"New York, NY"}</p>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
export default Resume;
