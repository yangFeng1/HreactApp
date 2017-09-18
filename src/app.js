import React,{Component} from 'react';
import List from './component/List';
import Input from './component/input.js';
var onInputChange;
var onInputSubmit;
var clickItem;
var clickDelBtn;
var delAllBtn;
			class App extends Component{
        componentWillMount() {
          this.setState({
            list:[],
             newToDo:'test'
          })
           onInputChange = (event) => {
            this.setState({ newToDo: event.target.value}); 
          }
          onInputSubmit = (event) => {
          event.preventDefault()
          this.setState((previousState) =>({
            list: [...previousState.list, {item:previousState.newToDo,done:false}],
            newToDo:''
          }))
        }
          clickItem = (i,event) =>{
            this.setState((previousState) =>({
              list:[...previousState.list.slice(0,i),
              Object.assign({},previousState.list[i],{done:!previousState.list[i]['done']}),
              ...previousState.list.slice(i+1)
              ]
          }))
          }
          clickDelBtn = (i) =>{
            this.setState((previousState)=>({
              list:[...previousState.list.slice(0,i),...previousState.list.slice(i+1)]
            }))
          }
          delAllBtn = (event) =>{
              var newList = []
              for(var i = 0; i < this.state.list.length;i++){
                  if(this.state.list[i].done == true){

                  }else{
                    newList[newList.length] = this.state.list[i]
                  }

              }
              this.setState((previousState)=>({
              list:[...newList]
            }))
            }
        }

			 render(){
		  		return (
                  <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                     <div className="panel panel-default">
                       <div className="panel-body">
                         <h1>My To Do App</h1>
                         <Input value = {this.state.newToDo}  onChange={onInputChange} onInputSubmit={onInputSubmit}/>
                         <hr/>
                         <List listItems={this.state.list} onClick={clickItem} clickDelBtn={clickDelBtn}/>   
                         <button onClick={delAllBtn}>删除已完成</button> 
                       </div>
                     </div>
                    </div>
                    </div>
                )
			}
			}	
			export default App
