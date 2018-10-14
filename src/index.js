import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {computed, observable} from "mobx";
import * as mobx from "mobx";
import {observer} from "mobx-react";

function App(props) {
    return(
        <div
            className="app"
            id="app"
        >
            <RotateYPiece />
            <RotateXPiece />
            <RotateCarouselPiece />
            <CarouselButtonRight />
            <CarouselButtonLeft />
        </div>
    );
}

class RotateYPiece extends React.Component {
    render() {
        return(
            <div
                className="rotateYPiece"
            >
                <div
                    className="rotateYPiece-content"
                >
                    <div
                        className="rotateYPiece-content-front"
                    >
                        <div
                            className="rotateYPiece-content-front-title"
                        >
                            Front
                        </div>
                        <div
                            className="rotateYPiece-content-front-info"
                        >
                            Lorem ipsum front.
                        </div>
                    </div>
                    <div
                        className="rotateYPiece-content-back"
                    >
                        <div
                            className="rotateYPiece-content-back-title"
                        >
                            Back
                        </div>
                        <div
                            className="rotateYPiece-content-back-info"
                        >
                            Lorem ipsum back.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class RotateXPiece extends React.Component {
    render() {
        return(
            <div
                className="rotateXPiece"
            >
                <div
                    className="rotateXPiece-content"
                >
                    <div
                        className="rotateXPiece-content-front"
                    >
                        <div
                            className="rotateXPiece-content-front-title"
                        >
                            Front
                        </div>
                        <div
                            className="rotateXPiece-content-front-info"
                        >
                            Lorem ipsum front.
                        </div>
                    </div>
                    <div
                        className="rotateXPiece-content-back"
                    >
                        <div
                            className="rotateXPiece-content-back-title"
                        >
                            Back
                        </div>
                        <div
                            className="rotateXPiece-content-back-info"
                        >
                            Lorem ipsum back.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

@observer
class RotateCarouselPiece extends React.Component {
    render() {
        return(
            <div
                className="rotateCarouselPiece"
            >
                <div
                    className="rotateCarouselPiece-content"
                    style={{transform: 'rotateY(' + carouselStore.carouselAngle + 'deg)'}}
                >
                    <div
                        className="rotateCarouselPiece-content-one rotateCarouselPiece-content-item"
                    >
                        One
                    </div>
                    <div
                        className="rotateCarouselPiece-content-two rotateCarouselPiece-content-item"
                    >
                        Two
                    </div>
                    <div
                        className="rotateCarouselPiece-content-three rotateCarouselPiece-content-item"
                    >
                        Three
                    </div>
                    <div
                        className="rotateCarouselPiece-content-four rotateCarouselPiece-content-item"
                    >
                        Four
                    </div>
                    <div
                        className="rotateCarouselPiece-content-five rotateCarouselPiece-content-item"
                    >
                        Five
                    </div>
                    <div
                        className="rotateCarouselPiece-content-six rotateCarouselPiece-content-item"
                    >
                        Six
                    </div>
                    <div
                        className="rotateCarouselPiece-content-seven rotateCarouselPiece-content-item"
                    >
                        Seven
                    </div>
                    <div
                        className="rotateCarouselPiece-content-eight rotateCarouselPiece-content-item"
                    >
                        Eight
                    </div>
                    <div
                        className="rotateCarouselPiece-content-nine rotateCarouselPiece-content-item"
                    >
                        Nine
                    </div>
                </div>
            </div>
        );
    }
}

class CarouselButtonRight extends React.Component {

    turnCarousel() {
        carouselStore.carouselAngle += 40;
        console.log("%c" + carouselStore.carouselAngle, "color: firebrick");
    }


    render() {
        return(
            <div
                className="turnCarouselButton-containerRight"
                onClick={this.turnCarousel}
            >
                <i className="fas fa-angle-double-right turnCarouselButton-containerRight-btnRight"></i>
            </div>
        );
    }
}

class CarouselButtonLeft extends React.Component {

    turnCarousel() {
        carouselStore.carouselAngle -= 40;
        console.log("%c" + carouselStore.carouselAngle, "color: firebrick");
    }


    render() {
        return(
            <div
                className="turnCarouselButton-containerLeft"
                onClick={this.turnCarousel}
            >
                <i className="fas fa-angle-double-left turnCarouselButton-containerLeft-btnLeft"></i>
            </div>
        );
    }
}

class CarouselStore {
    @observable carouselAngle = 0;
}

const carouselStore = new CarouselStore();

ReactDOM.render(<App store={carouselStore} />, document.getElementById('root'));