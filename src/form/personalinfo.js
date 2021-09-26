import React, { Component } from 'react'
import './personalinfo.css';
import axios from 'axios';
import Checkingresp from './checkingresp';
import { Route } from 'react-router';

export default class Chefinfo extends Component
 {
 
    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
            //  Gender: '',
             
             address: '',
             city: '',
             state: '',
             pincode: '',
             phno:  '',
             email:'',
            //  POI: '', POIno: '',
             kname : '',
             preference: '',
            //  Exp:'',
            //  Nofy: '0',
             promises: '',
             kitchenpht: '',
             fssai: '',
             username: '',
             password: '',
             rePassword: ''
            //  FSSAIno:'', True: '',
            //  Terms: '', Cdate: ''

        }
    }

    

    cname = (event) => {  this.setState ( {name : event.target.value} ) }
   //cnation = (event) => { this.setState ( { Nation: event.target.value} ) }
    caddress = (event) => { this.setState ( { address: event.target.value} ) }
    ccity = (event) => { this.setState ( { city: event.target.value} ) }
    cstate = (event) => { this.setState ( { state: event.target.value} ) }
    cpincode = (event) => { this.setState ( { pincode: event.target.value} ) }
    cphno = (event) => { this.setState ( { phno: event.target.value} ) } 
    // caphno = (event) => { this.setState ( { Aphno: event.target.value} ) }
    cemail = (event) => { this.setState ( { email: event.target.value} ) }
    // cpoi = (event) => { this.setState ( { POI: event.target.value} ) }
    // cpoin = (event) => { this.setState ( { POIno: event.target.value} ) }
    ckname = (event) => { this.setState ( { kname: event.target.value} ) }
    cprefer = (event) => { this.setState ( { preference: event.target.value} ) }
    // cexp = (event) => { this.setState ( { Exp: event.target.value} ) }
    // cnofy = (event) => { this.setState ( { Nofy: event.target.value} ) }
    cpromi = (event) => { this.setState ( { promises: event.target.value} ) }
    ckitchenpht = (event) => { this.setState ( { kitchenpht: event.target.files[0]} ) } 
    cfssai = (event) => { this.setState ( { fssai: event.target.value} ) } 
    cusername = (event) => { this.setState ( { username: event.target.value} ) } 
    cpassword = (event) => { this.setState ( { password: event.target.value} ) } 
    crepassword = (event) => { this.setState ( { rePassword: event.target.value} ) }    
    // cterms = (event) => { this.setState ( { Terms: event.target.value} ) }
    // ccdate = (event) => { this.setState ( { Cdate: event.target.value} ) }

//////////////////// on submit //////////////////////////////////////////////////////////////////////////////////////

    submitted = (eve) => {
         eve.preventDefault(); 
         console.log (this.state);

         var bodyFormData = new FormData();
         bodyFormData.append('name', this.state.name);
         bodyFormData.append('address', this.state.address);
         bodyFormData.append('city', this.state.city);
         bodyFormData.append('state', this.state.state);
         bodyFormData.append('pincode', this.state.pincode);
         bodyFormData.append('phno', this.state.phno);
         bodyFormData.append('email', this.state.email);
         bodyFormData.append('kname', this.state.kname);
         bodyFormData.append('preference', this.state.preference);
         bodyFormData.append('promise', this.state.promise);
         bodyFormData.append('fssai', this.state.fssai);
         bodyFormData.append('username', this.state.fssai);
         bodyFormData.append('password', this.state.fssai);
         bodyFormData.append('rePassword', this.state.fssai);

        bodyFormData.append('kitchenpht',this.state.kitchenpht);

        //// old axios//////
         var id;
         axios.post("http://localhost:8099/form/personalinfo", this.state)
         .then(response => {
             id = response.data;
             let div = document.getElementById("response");
             div.textContent = "Thank You for registering as Chef in Home-Chef Your Chef id is "+ id;
             div.style.textAlign = "center";
             div.style.color = "crimson";
             console.log("servercalled");
         })
        
//         axios({
//   url: 'http://localhost:8099/form/personalinfo',
//   method: 'POST',
//   data:  this.states,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'multipart/form-data',
//   },
// });
                
        }

         

/////////////////// on Reset //////////////////////////////////////////////////////////////////////////////////////////

    setClean = () => {
        this.setState ( {name : ''} ) 
        // this.setState ( {Gender :''} )  
        this.setState ( {address :''} ) 
        this.setState ( {city :''} ) 
        this.setState ( {state :''} ) 
        this.setState ( {pincode :''} ) 
        this.setState ( {phno :''} )
        this.setState ( {email :''} )
        this.setState ( {kname :''} )
        this.setState ( {preference :''} )
        this.setState ( {promises :''} )
        this.setState ( {username :''} )
        this.setState ( {password :''} )
        this.setState ( {rePassword :''} )
    }
////////////////// text Regex /////////////////////////////////////////////////////////////////////////////////////

    textPattern = (eve) => {
         const textPattern = /^[A-Za-z\s,]+$/
         let text = eve.target.value;
         let idname =  eve.target.id ;

         if( idname === "nameId")
         {
            if(textPattern.test(text))
            {
                let div = document.getElementById("nameCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("nameCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }
         else if (idname === "cityId")
         {
             if(textPattern.test(text))
            {
                let div = document.getElementById("cityCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("cityCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }

         else if (idname === "stateId")
         {
             if(textPattern.test(text))
            {
                let div = document.getElementById("stateCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("stateCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }

         else if (idname === "promiseId")
         {
             if(textPattern.test(text))
            {
                let div = document.getElementById("promiseCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("promiseCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }
    }


////////////////////// Phone number Regex ////////////////////////////////////////////////////////////////////////////////////////

    numberPattern = (eve) =>{
         const textPattern = /^[0-9]{10}$/
         let text = eve.target.value;
         let idname =  eve.target.id ;
          if( idname === "phnoId")
         {
            if(textPattern.test(text))
            {
                let div = document.getElementById("phnoCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("phnoCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }
    }

////////////////////// Pincode Regex ////////////////////////////////////////////////////////////////////////////////////////

    pincodePattern = (eve) =>{
         const textPattern = /^[0-9]{6}$/
         let text = eve.target.value;
         let idname =  eve.target.id ;
         if (idname === "pincodeId")
         {
             if(textPattern.test(text))
            {
                let div = document.getElementById("pincodeCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("pincodeCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }
    }

///////////////////////// Email Regex /////////////////////////////////////////////////////////////////////////////////////////////////////////////

    emailPattern = (eve) =>{
         const textPattern = /^[a-zA-Z0-9]+[@]{1}[a-zA-Z]+[.com]{4}$/
         let text = eve.target.value;
         let idname =  eve.target.id ;
         if( idname === "emailId")
         {
            if(textPattern.test(text))
            {
                let div = document.getElementById("emailCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("emailCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }
    }

///////////////////// username /////////////////////////////////////////////////////////////////////////////////////////////////////////

    usernamePattern = (eve) => {
         const textPattern = /^[A-Za-z0-9]+$/
         let text = eve.target.value;
         let idname =  eve.target.id ;

         if( idname === "usernameId")
         {
            if(textPattern.test(text))
            {
                let div = document.getElementById("usernameCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("usernameCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }
    }

///////////////////// Password /////////////////////////////////////////////////////////////////////////////////////////////////////////

    passwordPattern = (eve) => {
         const textPattern = /^((?=.*\d)(?=.*[a-z])(?=.*[A-z])(?=.*[@!#$%^&.?*()+-])).{8,12}$/
         let text = eve.target.value;
         let idname =  eve.target.id ;

         if( idname === "passwordId")
         {
            if(textPattern.test(text))
            {
                let div = document.getElementById("passwordCmds");
                div.textContent = "";
            }
            else{
                let div = document.getElementById("passwordCmds");
                div.textContent = "invalid";
                div.style.color="red";
            }
         }
    }

/////////////////////re-enter Password /////////////////////////////////////////////////////////////////////////////////////////////////////////

    repasswordPattern = (eve) => {
         let text = eve.target.value;
         let idname =  eve.target.id ;

         if( idname === "repasswordId")
         {
            if(text === this.state.password)
            {
                let div = document.getElementById("repasswordCmds");
                div.textContent = "correct";
                div.style.color="green";
            }
            else{
                let div = document.getElementById("repasswordCmds");
                div.textContent = "incorrect";
                div.style.color="red";
            }
         }
    }


    render() {
        return (
            <div className = "bod">
                <h3>Registration Details</h3><br/>
              <form onSubmit={this.submitted} method = "post" encType="multipart/form-data"> 

                 <div className="container">
                <label className="label"> Name </label>
                <input type="text"  name="chefName" value = {this.state.name} onChange = {this.cname} onInputCapture={this.textPattern} id="nameId" className = "ip1" required></input>
                <span id="nameCmds" className="valid-cmds"> </span> <br/>
            

                <div className="Address-container">

                

                <label className="label"> Address </label>                
                <input type="text"  name="chefAddresss" value = {this.state.address} onChange ={this.caddress} className = "ipage" required></input> &ensp; &ensp; &ensp; &nbsp;

                <label  className="label"> city </label>
                <input type="text"  name="chefCity" value = {this.state.city} onChange = {this.ccity} onInputCapture={this.textPattern} id="cityId"  className = "ipage" required></input> 
                <span id="cityCmds" className="valid-cmds"> </span> <br/>

                <label className="label"> State </label>
                <input type="text"  name="chefState" value = {this.state.state} onChange = {this.cstate} onInputCapture={this.textPattern} id="stateId" className = "ipage" required></input> 
                <span id="stateCmds" className="valid-cmds"> </span> &ensp; &ensp; &ensp; &nbsp;

                <label className="label" > Pincode </label>
                <input type="text"  name="chefPincode" inputMode= "numeric" value = {this.state.pincode} onChange = {this.cpincode} onInputCapture={this.pincodePattern} id="pincodeId" className = "ipage" required></input>
                 <span id="pincodeCmds" className="valid-cmds"> </span> <br/>

                 <label className="label"> Phone Number </label>
                <input type="text"  name="chefPhno" inputMode= "numeric" value = {this.state.phno} onChange = {this.cphno}  onInputCapture={this.numberPattern} id="phnoId" className = "ipage " required></input>
                <span id="phnoCmds" className="valid-cmds"> </span> &ensp; &ensp; &ensp; &nbsp;

                

                
                <label className="label"> E-mail Id </label>
                <input type="email"  name="chefEmail" value = {this.state.email} onChange = {this.cemail} onInput={this.emailPattern} id="emailId" className = "ipage" required></input>
                <span id="emailCmds" className="valid-cmds"> </span> &ensp; &ensp; &ensp; &nbsp;

                

                     </div>



 
                              
                <label className="label"> Your Kitchen Name </label>                
                <input type="text"  name="kitchenName" placeholder="Enter your preferable name" value = {this.state.kname} onChange = {this.ckname} className = "ip1" required></input> <br/>
            


                <label className="label"> Dietry Restriction</label>
                <select name="dietry" className = "ip selectarea" required value = {this.state.preference} onChange = {this.cprefer}>
                    <option value='' disabled> Choose your preference that you cook</option>
                    <option value = "Veg" onChange = {this.cprefer}>Veg</option>
                    <option value = "Non-veg" onChange = {this.cprefer}>Non-veg</option>
                    <option value = "Both" onChange = {this.cprefer}>Both</option>
                    </select> <br/> 

               

                <label className="label"> Promises </label>                
                <input type="text"  name="promises" placeholder="eg: no ajinomoto, no food colorants, no artificial ingredients etc.." value = {this.state.promises} onChange = {this.cpromi} onInputCapture={this.textPattern} id="promiseId" className = "ip1" ></input>
                <span id="promiseCmds" className="valid-cmds"> </span> <br/> <br/>

              
            
             <label  className="label">Upload your Kitchen photo  </label>
                 <input type="file" className="upload"  onChange = {this.ckitchenpht} required ></input><br/><br></br>
            




                   <label className="label" > FSSAI certificate number </label>
                 <input type="text"  className = "ipage" required onChange = {this.cfssai}></input>

                 <div>
                      <label  className="label">Set Username </label>
                      <input type="text"  name="chefusername" value = {this.state.username} onChange = {this.cusername} onInputCapture={this.usernamePattern} id="usernameId"  className = "ipage" required></input> 
                      <span id="usernameCmds" className="valid-cmds"> </span> <br/>

                      <label  className="label">Set Password </label>
                      <input type="password"  name="chefpassword" value = {this.state.password} onChange = {this.cpassword} onInputCapture={this.passwordPattern} id="passwordId"  className = "ipage" required></input> 
                      <span id="passwordCmds" className="valid-cmds"> </span> <br/>

                      <label  className="label"> Re-enter Password </label>
                      <input type="password"  name="chefrepassword" value = {this.state.rePassword} onChange = {this.crepassword} onInputCapture={this.repasswordPattern} id="repasswordId"  className = "ipage" required></input> 
                      <span id="repasswordCmds" className="valid-cmds"> </span> <br/>
                  </div>

                  <div className="diiv"><br/>

                
                                           <b>
                          <ol>
                              <li> I certify that all information provided in this registration application is true .
                                  I understand that any false information or ommission of information may reject me from consideration of a home chef</li>
                              <br/> <li> I have read and understood the above declaration before signing this</li>
                          </ol>
 
                        <input type="checkbox"  value = {this.state.Terms} onChange = {this.cterms} required className="agreem"></input> <label> <u>I agree to the Terms and Conditions</u></label> <br/> 

                      </b>
                      <br></br>
                 
                
                  </div>
                

                      <button type="reset" onClick={this.setClean} className="butn">RESET</button>
                      <button type="submit" className="butn">SUBMIT</button>

                      <div id="response"> </div>
                </div>
              </form> 
            </div>
        )
    }
}
