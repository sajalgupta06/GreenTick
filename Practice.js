import { render } from '@testing-library/react';
import React, { Component } from 'react';
import {ARRAY} from './database';

class Array extends Component {
      render(){
          const table=ARRAY.map((ques)=>{
              return(<div class="container">
              <div class="row">
              <div class="col-2 ml-3">
                    {ques.id}
               </div>
                <div class="col-5" style={{color:'#2C7EDE'}}>
                    {ques.name}
               </div>
                {
                  ques.level =='easy'?<div class="col-2" style={{color:'#0FBB00'}}>easy</div>:ques.level =='medium'?<div class="col-2" style={{color:'#FFA800'}}>medium</div>:<div class="col-2" style={{color:'#BB0000'}}>hard</div>
                }
                <div class="col-2 ml-2">
                <a href="#">solution</a>
                </div>
            </div>
        </div>
            );
          });
          return(<div class="container">
              <div class="row mt-5 " style={{justifyContent:'center',background:'#F1F1F1'}}>
                <button  style={{background:'#FFFFFF'}} type="button" class="btn btn-outline-dark mt-4 mb-4 mr-2"><b style={{color:'#000000'}}>Resources</b></button>
              <button style={{background:'#FFFFFF'}} type="button" class="btn btn-outline-dark mt-4 mb-4 ml-2"><b style={{color:'#000000'}}>Practice</b></button></div>
              <div class="row mt-5" style={{justifyContent:'center'}}><h2 >Arrays</h2></div>
              <div class="row mt-4 mb-2">
          <div class="col-6 ml-5 ">
                Search for a Problem
           </div>
           <div class="col-2 ml-5">
           <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
             Difficulty
         </button>
         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
         <li><a class="dropdown-item" href="#">Easy</a></li>
        <li><a class="dropdown-item" href="#">Medium</a></li>
        <li><a class="dropdown-item" href="#">Hard</a></li>
       </ul>
       </div>
           </div>
           <div class="col-2 ml-2">
           <div class="dropdown">
          <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
          Tag
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
           </div>
           </div>
          <div class="row">
          <div class="col-2 ml-4 mb-2">
                <h2> #</h2>
           </div>
           <div class="col-5 mb-2">
                <h2>Title</h2>
           </div>
           <div class="col-2 mb-2">
                <h2>Difficulty</h2>
           </div>
           </div>
           {table}
           </div>);
      }
    }
    export default Array;