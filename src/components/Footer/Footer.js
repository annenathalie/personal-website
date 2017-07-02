import React from 'react';
import './footer.scss';
import Button from '../Button';

class Footer extends React.Component {
  render(){
    return(
      <div className="footer">
        <div className="footer__content">
          <Button />
            <a className="download__resume" href="resume.pdf"
             download="resume.pdf">Download my resume as PDF<i className="fa fa-download fa-lg" aria-hidden="true"></i>
             </a>
        </div>
      </div>
    );
  }
}
export default Footer;
