import React,{Component} from "react";
export default class Gallery extends Component{
    render(){
        return(
       <div>
        <h1 style={{color:"green"}}><center>Gallery</center></h1>
                    <div style={{paddingLeft:"100px"}}><img src='images/Wt3_qOtDOhS.jpeg' height="300px" width="400px"/>
                    <img src='images/kid.jpg' height="300px" width="400px"/>
                    <img src='images/kk4.jpeg' height="300px" width="400px"/>
                    <img src='images/kk5.jpeg' height="300px" width="400px"/>
                    </div>
                    <div style={{paddingLeft:"100px"}}>
                    <img src='images/kt1.jpeg' height="300px" width="400px"/>
                    <img src='images/ks1.jpeg' height="300px" width="400px"/>
                    <img src='images/kt4.jpeg' height="300px" width="400px"/>
                    <img src='images/kt1.jpeg' height="300px" width="400px"/>
                    </div>
                    
        </div>
        );
    }
}