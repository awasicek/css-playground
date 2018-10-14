import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {computed, observable} from "mobx";
import * as mobx from "mobx";
import {observer} from "mobx-react";
import logo from './assets/calvin_and_hobbes_logo.png';

const navEnums = {
    CAROUSEL: 0,
    FLIP_ITEMS: 1
};

@observer
class App extends React.Component {
    render() {
        return(<Fragment>
                <NavBar />
            {rootStore.pageStore.displayPage}
        </Fragment>
        );
    }
}

class NavBar extends React.Component {
    navigate = function(page) {
        switch(page) {
            case navEnums.CAROUSEL:
                rootStore.pageStore.displayPage = rootStore.pageStore.carouselPage;
                break;
            case navEnums.FLIP_ITEMS:
                rootStore.pageStore.displayPage = rootStore.pageStore.flipPage;
                break;
            default:
                console.warn("oops...something went wrong with nav");
                break;
        }
    };

    render() {
        return(
            <div className="navBar-container" key="nav_container">
                <img
                    src={logo}
                    alt="navLogo"
                    className="navBar-container-logo"
                />
                <nav className="navBar-container-navSection">
                    <ul className="navBar-navSection-list">
                        <li className="navBar-navSection-list-listItem" key="nav_carousel">
                            <div id="nav_carousel" className="navBar-listItem-link" onClick={() => {this.navigate(navEnums.CAROUSEL)}}>Carousel</div>
                        </li>
                        <li className="navBar-navSection-list-listItem" key="nav_flip_items">
                            <div id="nav_flip_items" className="navBar-listItem-link" onClick={() => {this.navigate(navEnums.FLIP_ITEMS)}}>Flip Items</div>
                        </li>
                    </ul>

                </nav>
            </div>
        );
    }
}

class RotateYPiece extends React.Component {
    render() {
        return(
            <div
                className="rotateYPiece"
                key="rotate_y_piece"
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
                key="rotate_x_piece"
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
                key="rotate_carousel_piece"
            >
                <div
                    className="rotateCarouselPiece-content"
                    style={{transform: 'rotateY(' + rootStore.carouselStore.carouselAngle + 'deg)'}}
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
        rootStore.carouselStore.carouselAngle += 40;
        console.log("%c" + rootStore.carouselStore.carouselAngle, "color: firebrick");
    }


    render() {
        return(
            <div
                className="turnCarouselButton-containerRight"
                onClick={this.turnCarousel}
                key="carousel_btn_right"
            >
                <i className="fas fa-angle-double-right turnCarouselButton-containerRight-btnRight"></i>
            </div>
        );
    }
}

class CarouselButtonLeft extends React.Component {

    turnCarousel() {
        rootStore.carouselStore.carouselAngle -= 40;
        console.log("%c" + rootStore.carouselStore.carouselAngle, "color: firebrick");
    }


    render() {
        return(
            <div
                className="turnCarouselButton-containerLeft"
                onClick={this.turnCarousel}
                key="carousel_btn_left"
            >
                <i className="fas fa-angle-double-left turnCarouselButton-containerLeft-btnLeft"></i>
            </div>
        );
    }
}

class CarouselStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }
    @observable carouselAngle = 0;
}

class PageStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.carouselPage = <div
            className="app"
            id="app"
        >
            <RotateCarouselPiece />
            <CarouselButtonRight />
            <CarouselButtonLeft />
        </div>;
        this.flipPage = <div
            className="app"
            id="app"
        >
            <RotateYPiece />
            <RotateXPiece />
        </div>;
    }
    @observable displayPage = this.carouselPage;
}

class RootStore {
    constructor() {
        this.carouselStore = new CarouselStore(this);
        this.pageStore = new PageStore(this);
    }
}

const rootStore = new RootStore();

ReactDOM.render(<App store={rootStore} />, document.getElementById('root'));