import React from 'react';
import './social.scss';

class Social extends React.Component {
  render() {
    return(
        <div className="social">
          <a href ="https://github.com/annenathalie" target="_blank">
            <i className="fa fa-github fa-lg" aria-hidden="true"></i>
            </a>
          <a href="https://codepen.io/nathalieanne/" target="_blank">
            <i className="fa fa-codepen fa-lg" aria-hidden="true"></i>
            </a>
          <a href="https://www.linkedin.com/in/anholmes/" target="_blank">
            <i className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
            </a>
        </div>
    );
  }
}
export default Social;
