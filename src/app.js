import React,{Component} from 'react';
import List from './component/List'
			class App extends Component{
        componentWillMount() {
          this.setState({
            list:['thing1','thing2','thing3']
          })
        }
				 render(){
				return (
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                     <div className="panel panel-default">
                       <div className="panel-body">
                         <h1>My To Do App</h1>
                         <hr/>
                         <List />
                       </div>
                     </div>
                    </div>
                    </div>
                )
			}
			}	
			export default App
