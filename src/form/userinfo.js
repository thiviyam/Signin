import React, { Component } from 'react'
import './userinfo.css';

export default class Userinfo extends Component 
{
    constructor(props) {
        super(props)
    
        this.state = {
             Name: '',
            //  Gender: '',
             Address: '',
             City: '',
             State: '',
             Pincode: '',
             Phno: '', Aphno: '',
             Email:'',
             Allergy:'',
             username: '',
             password: '',
             rePassword: ''
        }
    }
    
    cname = (event) => {  this.setState ( {Name : event.target.value} ) }
    // cgender = (event) => { this.setState ( {Gender : event.target.value} )  }
    caddress = (event) => { this.setState ( { Address: event.target.value} ) }
    ccity = (event) => { this.setState ( { City: event.target.value} ) }
    cstate = (event) => { this.setState ( { State: event.target.value} ) }
    cpincode = (event) => { this.setState ( { Pincode: event.target.value} ) }
    cphno = (event) => { this.setState ( { Phno: event.target.value} ) } 
    caphno = (event) => { this.setState ( { Aphno: event.target.value} ) }
    cemail = (event) => { this.setState ( { Email: event.target.value} ) }
    callergy = (event) => { this.setState ( { Allergy: event.target.value} ) }
    cusername = (event) => { this.setState ( { username: event.target.value} ) } 
    cpassword = (event) => { this.setState ( { password: event.target.value} ) } 
    crepassword = (event) => { this.setState ( { rePassword: event.target.value} ) } 
    
    submitted = (eve) => { eve.preventDefault(); console.log (this.Martial)}
    setclean = () => {
        this.setState ( {Name : ''} ) 
        // this.setState ( {Gender :''} )   
        this.setState ( {Address :''} ) 
        this.setState ( {City :''} ) 
        this.setState ( {State :''} ) 
        this.setState ( {Pincode :''} ) 
        this.setState ( {Phno :''} )
        this.setState ( {Aphno :''} ) 
        this.setState ( {Email :''} )
        this.setState ( {Allergy :'no'} )
        this.setState ( {username :''} )
        this.setState ( {password :''} )
        this.setState ( {rePassword :''} )
    }
    

    saveuser = (eve) => { 
        eve.preventDefault();
        fetch("http://localhost:8099/form/userinfo",
        {   
            method:"POST",
            
            
             headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                address: this.state.Address,
                city: this.state.City,
                state: this.state.State,
                pincode: this.state.Pincode,
                phoneno: this.state.Phno,
                username: this.state.username,
                email:this.state.Email,
                password: this.state.password,
            }
            )
             

        }).then(response =>{
             var div = document.getElementById("responseu");
             div.textContent = "Thank You For Signing-Up";
            console.log("New Student added")
        })
    }

/////////////////////username/////////////////////////////////////////////////////////////////////////////////////////////////////////

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
            <div className = "base">

                <h3>Personal Details</h3><br/>
                <form onSubmit={this.submitted}> 
                 
                <div className="name">
                <label className="labelp"> Name  </label>
                <input type="text" name="name" value = {this.state.Name} onChange = {this.cname} className = "ip" required></input> <br/>
                </div>
                
                
            {/*    <label className="labelp"> Date of Birth <sup className="supersc">*</sup> : </label>
                <input type="date" placeholder= "DOB" value = {this.state.DOB} onChange = {this.cdob} className = "ipdob" required></input>
                 <label> Age <sup className="supersc">*</sup>: </label>
        <input type="number" min = '18' max = '80' value = {this.state.Age} onChange = {this.cage} className = "ipage" required></input> <br/> */}
                
                {/* <label className="labelp"> Gender <sup className="supersc">*</sup> : </label>
                <input type="" placeholder= "Enter your gender" value = {this.state.Gender} onChange = {this.cgender} className = "ip" required></input> <br/> */}

            

                <div className="addressdetails">

                {/* <h4>Contact details</h4><br/> */}

                <label className="labelp"> Address  </label>                
                <input value = {this.state.Address}  name="address" onChange ={this.caddress} className = "ipage kbox" required></input> &ensp; &ensp; &ensp; &nbsp;

                <label  className ="labelp"> City  </label>
                <input type="text"  name="city" value = {this.state.City} onChange = {this.ccity} className = "ipage kbox" required></input> <br/>

                <label className ="labelp"> State  </label>
                <input type="text"  name="state" value = {this.state.State} onChange = {this.cstate} className = "ipage kbox" required></input> &ensp; &ensp; &ensp; &nbsp;

                <label className ="labelp"> Pincode  </label>
                <input type="text"  name="pincode" inputMode= "numeric" value = {this.state.Pincode} onChange = {this.cpincode} className = "ipage kbox" required></input> <br/>

                 <label className ="labelp"> Phone Number  </label>
                <input type="text"  name="phno" inputMode= "numeric" value = {this.state.Phno} onChange = {this.cphno} className = "ipage kbox" required></input> &ensp; &ensp; &ensp; &nbsp;

               {/* <label className ="labelp"> Alternative ph no : </label>
                <input type="text" inputMode= "numeric" value = {this.state.Aphno} onChange = {this.caphno} className = "ipage kbox" ></input> <br/> */}

                
                <label className ="labelp"> E-mail ID  </label>
                <input type="email"  name="email" value = {this.state.Email} onChange = {this.cemail} className = "ipage kbox"></input>


              </div>

                {/* <h4>Additional details</h4> */}

                 {/* <p className= "caution">
                     <h3> Information : </h3>
                     <div>We can provide food on,</div>
                     <ul>
                         <li>Monthly basis</li>
                         <li>Weekly basis</li>
                         <li>Random days basis</li>
                         
                     </ul>
                     Choose your plan accordingly
                 </p> */}
              <div className="other">
                <label className="labelp"> Any Allergies  </label>
                <input type="text"  name="allergies" value = {this.state.Allergy} onChange = {this.callergy} className = "ip" placeholder="If Yes Mention"></input> <br/>
                {/* <label className="cmds">If YES mention here</label> <br/> */}

                {/* <label className="labelp"> Your Plan <sup className="supersc">*</sup> : </label>
                <select className = "ip selectarea" value = {this.state.Plan} required  onChange = {this.cplan}>
                    <option value='' selected disabled> Select your Plan</option>
                    <option value = 'Monthly Bases' > Random Days Basis</option>
                    <option value = 'weekly Bases' >Weekly Basis</option>
                    <option value = 'Random Days Bases' > Monthly Basis</option>
                    </select> <br/> <br/> <br/> */}
                     </div>


                     <div>
                      <label  className="labelp">Set Username </label>
                      <input type="text"  name="username" value = {this.state.username} onChange = {this.cusername} onInputCapture={this.usernamePattern} id="usernameId"  className = "ip" required></input> 
                      <span id="usernameCmds" className="valid-cmds"> </span> <br/>

                      <label  className="labelp">Set Password </label>
                      <input type="password"  name="password" value = {this.state.password} onChange = {this.cpassword} onInputCapture={this.passwordPattern} id="passwordId"  className = "ip" required></input> 
                      <span id="passwordCmds" className="valid-cmds"> </span> <br/>

                      <label  className="labelp"> Re-enter Password </label>
                      <input type="password"  name="repassword" value = {this.state.rePassword} onChange = {this.crepassword} onInputCapture={this.repasswordPattern} id="repasswordId"  className = "ip" required></input> 
                      <span id="repasswordCmds" className="valid-cmds"> </span> <br/>
                  </div>
                
                <button type="reset" onClick={this.setclean} className="butnu">RESET</button>
                 <button type="submit" className="butnu" onClick={this.saveuser}>SUBMIT</button>

                 <div id="responseu"></div>

                </form>
            </div>
        )
    }
}
