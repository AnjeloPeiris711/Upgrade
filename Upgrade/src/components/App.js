import React,{Component} from "react";
import './App.css'
class App extends Component{
    render(){
        return(
            <div className="container">
                <div className="topnav">
                    <a className="active" href="#record">record</a>
                    <a href="#news">News</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </div>
                <main>
                    <p>Welcome to the Upgrade Mode interface.</p>
                    <button className="upgrade-button">Activate</button>
                </main>
        <footer>
            <p>&copy; 2023 Ben 10</p>
        </footer>
    </div>
        )
    }
}
export default App;