import React, { Text } from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";

/*
    All pages of the application extend React.Component and must be exported at the bottom 
    (or use export default class Home...)
    to be used in the application

    These class components all have a render and return method like such:
    render() {
        return (

        );
    }

    with all of the Tags (like body, div, h3, created components...) imbedded inside the return method
*/
class Home extends React.Component {
    render() {
        return (
            <body
                id="home"
            >
                <Title/>
                <div
                    className="main-screen-tab"
                >
                    <MenuItems
                        text="Login"
                    />
                    <MenuItems
                        text="Register"
                    />
                    <MenuItems
                        text="Blog"
                    />
                    <MenuItems
                        text="Contact Us"
                    />
                </div>
            </body>
        );
    }
}


/*

    This is the title of the main screen. 
    it includes an h3 (text) element which corresponds to the css element
    'home-screen-text' in Home.css

    For now, it just says 'Welcome'
*/
const Title = () => {
    return  (
       <h3
            className="home-screen-text welcome-text"
       >
            Welcome!
       </h3> 
    );
}

/*
    To pass arguments into created components like 'MenuItems' below,
    we use props. This tells React that this component can have different
    variations

    To use these different variations, the props.text tag will be used when 
    doing a self-closing 'MenuItems' component under the Home render
    ex:

    <MenuItems
        text="Login"
    />    <-- self closing (all created components will be self-closing)

    In the future this will be a link to another page. For now, when it is clicked,
    an alert function I've created tells the user which button they've pressed
*/
const MenuItems = (props) => {
    function giveDirection() {
        let direction = "/" + String(props.text).trim().toLowerCase();
        return direction;
    }

    return (
        <Link
            className="home-screen-text menu-text"
            to={giveDirection()}
        >
            {props.text}
        </Link>
    )
}

export default Home;
