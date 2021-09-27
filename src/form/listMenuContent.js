import axios from 'axios'
import React, { Component } from 'react'



export default class ListMenuContent extends Component
{

    constructor(props) {
        super(props)

        this.state = {
               chefId : '',
               Menuitem: []
        }
    }

    
    handleChange = (eve) => { this.setState( {chefid: eve.target.value} ) };

    handleSubmit = (eve) =>{
         eve.preventDefault(); 
          console.log(this.state);

         axios.post("http://localhost:8099/form/listMenuContent" , this.state)
        .then((res) => {
            console.log(this.state.chefId);
            this.setState({ Menuitem: res.data});
             console.log(this.state.Menuitem);
        })

    }
  
    render() {
        return (
            <div>
                 <h2 className="text-center"> Menu List </h2>
                 <form method ="get" onSubmit={this.handleSubmit}>
                  <input type="text" inputMode="numeric" name="chefId" onChange={this.handleChange}/>
                  
                   <div className = "row">
                         <table className = "table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th> Food Name</th>
                                    <th> FoodType</th>
                                    <th> Food period</th>
                                    <th> Food Price</th>
                                    <th> Chef ID</th>
                                    <th> Food ID</th>
                                 </tr>
                             </thead>


                                <tbody>
                                  {
                                    this.state.Menuitem.map
                                    ( Menuitem => 
                                        <tr key = {Menuitem.foodId}>
                                              <td> {Menuitem.foodName}</td>
                                             <td> {Menuitem.foodType} </td>   
                                             <td> {Menuitem.foodPeriod}</td>
                                             <td> {Menuitem.foodPrice}</td>
                                             <td> {Menuitem.chefId}</td>
                                              <td> {Menuitem.foodId}</td>

                                             </tr>
                                    )
                                  }
                            </tbody>
                
                        </table>
       
                  </div>
                  <button type="submit"> submit </button>
                  </form>
                  
                          </div>
                         ) 
                      
      }

 }