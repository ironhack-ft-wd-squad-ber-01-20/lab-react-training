import React, { Component } from "react";
import LikeButton from "./components/LikeButton/LikeButton.js";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>IdCard</h1>
                {/* TODO: Use the IdCard component */}

                <h1>Greetings</h1>
                {/* TODO: Use the Greetings component */}
                <LikeButton />
                <LikeButton />
            </div>
        );
    }
}

export default App;
