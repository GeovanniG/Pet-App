import React, { useState } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Card = ({name, photos='', description='', url } = {}) => {
    const [showBackSide, setShowBackSide] = useState(false);
    const [showFrontSide, setShowFrontSide] = useState(true);

    const onClick = (e) => {
        switch (e.target.name) {
            case 'front':
                setShowBackSide(true);
                setShowFrontSide(false);      
                break;

            case 'back':
                setShowBackSide(false);
                setShowFrontSide(true); 
                break;
    
            default:
                break;
        }
    }

    return (
        <ReactCSSTransitionGroup 
            transitionName="card"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
            className="card"
        >
            {showFrontSide && (
                <div className="card__front card--overflow" >
                    <h2 className="card__title">{name}</h2>
                    {(!name && !photos[0]) && <p>Give me a sec, I'm coming</p>}
                    {photos[0] &&  <img src={photos[0].medium} className="card__img" alt="animal" />}
                    {(name && !photos[0]) && <p>No Photo Available</p>}
                    <button onClick={onClick} name="front" className="card__front-btn">Get to know {name}</button>
                </div>
            )}
            
            {showBackSide && (
                <div className="card__back card--overflow">
                    <h2 className="card__title card__title--back">Get to know {name}</h2>
                        {description && <p className="card__text">{description}</p>}
                        {(name && !description) && <p>No Description Available</p> }
                    <div className="card__back-btns">
                        <button onClick={onClick} name="back" className="card__back-btn">See {name}</button>
                        <a href={url}><button className="card__back-btn">Learn More</button></a>
                    </div>
                </div>
            )}
        </ReactCSSTransitionGroup>
    )
}

export default Card;