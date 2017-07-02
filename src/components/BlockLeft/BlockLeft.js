import React from 'react';
import './blockLeft.scss';
import Social from '../Social';
import Footer from '../Footer';
import myImg from '../../img/myImg.jpg';



class BlockLeft extends React.Component {
  render() {
    return (
    <div className="block block--left">
      <div className="block__inner">
        <div className="block__content__header">
          <div className="block__container">
            <div className="block__figure__wrapper">
              <figure className="bio__img frame">
                <img className="frame__img" src={myImg} alt="Me drinking espresso in Rome"/>
              </figure>
              <Social />
            </div>
          </div>
          <div className="block__content__bio">
            <h1 className="introduction">{"Hello, "}</h1>
            <p className="about__me">My name is Nathalie, I'm a <em>front-end web developer</em> based in NYC.</p>
            <p className="skills">Fluent in <em>HTML5</em> <em>CSS3</em> <em>SASS</em> and polishing on my skills in <em>JavaScript</em> and <em>React</em> everyday.</p>
          </div>
        </div>
      </div>
    </div>
  );
  }
}
export default BlockLeft;
