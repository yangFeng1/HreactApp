import {connect} from 'react-redux'
import ToDoApp from '../app.js'

function mapStateToProps(state){
  return {
    toDoApp:state.toDoApp
  }
}
function mapDispathchToProps(dispatch){
  return{}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ToDoApp);
