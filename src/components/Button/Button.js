import React from 'react';
import './button.scss';

class Button extends React.Component {
  render() {
    return(
          <div className="block__cta">
            <a className="block__cta-tag" data-email="holmes.annen@gmail.com" href="mailto:holmes.annen@gmail.com">
              <span className="cta__text">Get In Touch</span>
              <span className="cta__text-hidden">with me</span>
            </a>
          </div>
    );
  }
}
export default Button;
