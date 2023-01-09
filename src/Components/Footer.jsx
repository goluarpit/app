import React,{Component} from "react";
export default class Footer extends Component{
    render(){
        return(
       <div>
        <h1 style={{color:"green"}}></h1>
        <div class="row footer bg-dark mt-4">
  <div class="col-sm-2"></div>
  <div class="col-sm-8">
    <div class="row">
        <div class="col-sm-3 text-center p-2 ">
          <span class="text-light fs-4">Desire<b class="text-danger">Cart <i class="fa-solid fa-cart-shopping text-danger"></i></b></span>
          <br/>
            <h6 class="text-light">Address:lucknow uttar paradesh 226022<br/>
              Phone: +91-9519348772<br/>
              E-mail:-manishkumar951934@gmail.com
              </h6>
            
        </div>
        <div class="col-sm-3 p-2">
        <h6 class="text-light text-center">Information<br/>
        <br/>
            About US<br/>
            Checkout<br/>
            Contact<br/>
          </h6>
    
        </div>
        <div class="col-sm-3 p-2">
          <h6 class="text-light text-center">My  Account<br/>
          <br/>
              My Acount<br/><br/>
              Contart<br/><br/>
              Shopping Cart<br/>
            </h6>
        </div>
        <div class="col-sm-3 p-2">
          <h6 class="text-light text-center">join Our Neweletter NOw<br/><br/>
          Get E-mail updateabout our latter shop and<br/>
          special otter
          </h6>
          <div class="input-group m-1 fs-3 ">
            <input type="password" placeholder="Enter your Email" class="form-control "/>
            <i class="input-group-text  bg-mycolor text-light ">
               SUBSCRIBE
            </i>
        </div>
        </div>
    </div>
  </div>
  <div class="col-sm-2"></div>
</div>
        </div>
        );
    }
}