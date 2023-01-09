
import React,{Component} from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";
import Register from "./Components/Register";
import Gallery from "./Components/Gallery";

export default class App extends Component{
    render(){
        return(
            <>
            <Header/>
            {this.loadMainContent()}
            <Footer/>
            </>
        );
    }
    loadMainContent=()=>{
        let view="";
        switch(window.location.hash){            case "#home":
                view=<Home/>;
                break;
            case "#about":
                view=<About/>;
                break;
                case "#product":
                view=<Product/>;
                break;
                case "#register":
                view=<Register/>;
                break;
                case "#gallery":
                view=<Gallery/>;
                break;
                default:
                    view=<h1 style={{color:"red"}}>//404 this is Not Found<br/>
                    <img src='images/Wt3_qOtDOhS.jpeg' height="300px" width="400px"/></h1>
                    break;
        }
        return view
    }
}