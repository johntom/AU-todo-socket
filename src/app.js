
// https://discourse.aurelia.io/t/resolved-using-socket-io-with-aurelia/244/4

import {Todo} from './models/todo'
import {ApiService} from './models/serviceAPI'
import { inject } from 'aurelia-dependency-injection';
import io from 'socket.io-client'; // bare import

// var socket = io.connect( 'http://localhost:1337' );
@inject(ApiService)
export class App {
    constructor(api) {
      //  this.http = http;
        this.upmess = ''
      
      //  this.baseweb = 'http://localhost:1337/'// /api/'
     //   http://localhost:1337/bakery

    this.api = api
    this.appName = 'Todo List';
    this.todoTitle = '';
   // this.todos=todo
    this.todos = [
      new Todo('Task one', false),
      new Todo('Task two', false),
      new Todo('Task three', false)
    ];

    this.socketio = io('', {
			'reconnection': true,
			'reconnectionDelay': 500,
			'reconnectionDelayMax': 5000,
			'reconnectionAttempts': 10
		});

    
  }

  addTodo() {
    this.todos.push(new Todo(this.todoTitle, false));
    this.todoTitle = '';
  }
  activate() {
  // return this.api.getbakery().then((jsonRes) => {
  //   this.bakeries = jsonRes//.data
  //   console.log('bb ', this.bakeries)
  // });


  // var url = this.baseweb + 'bakery'
  //       return fetch(url, {
  //           mode: 'cors'
  //       }).then((res) => res.json())
  //       this.bakeries = res.json()
  // }
  // return this.todos.getbakery().then((jsonRes) => {

    // this.socketio.emit('chatAddUser' JSON.stringify({ 
    //   username: this.username
    //     }));
//socket.on('food_ready', res => food.innerHTML += `<div>- ${res.name} is ${res.rating}/5 so delicious</div>`);
  
    //this.socketio.on('food_ready', (eventData)=> {
      var socket = io.connect( 'http://localhost:1337' );
      socket.on('food_ready', (eventData)=> {
        // <span class.bind="t.completed ? 'strikeout' : ''">${t.id} - ${t.title}</span>
    let rec = {id:eventData.rating,title:eventData.name+' - '+eventData.rating}
        this.todos.push(rec)
        this.bakeries.push(eventData)

      //let data = JSON.parse(eventData); // do something with data received
      console.log('data',eventData.name+' - '+eventData.rating)
    })


    return this.api.getbakery().then((jsonRes) => {
    this.bakeries = jsonRes//.data
    console.log('bb ', this.bakeries)
  });
 
}


addFood(){

}


}
