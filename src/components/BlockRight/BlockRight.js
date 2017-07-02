import React from 'react';
import './blockRight.scss';
import Resume from '../Resume';

class BlockRight extends React.Component {
  render() {
    return(
      <div className="block block--right">
        <div className="block__inner">
           <Resume />
        </div>
      </div>
    );
  }
}
export default BlockRight;
