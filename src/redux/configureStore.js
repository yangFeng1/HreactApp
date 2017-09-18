import { createStore, applyMiddleware, combineReducers } from 'redux';
//createStore 是由redux提供的用来初始化store的函数， applyMiddleware是用来添加我们需要的中间件的。
//combineReducers 用来把多个reducers合并为一个单一实体。
//createLogger 就是我们这里唯一使用的一个中间件，可以console出每一个action后数据的详细处理过程，给调试带来了很大方便。
import createLogger from 'redux-logger';
import toDoApp from './modules/toDoApp'   
const loggerMiddleware = createLogger(); // initialize logger

const createStoreWithMiddleware = applyMiddleware( loggerMiddleware)(createStore); // apply logger to redux
const reducer = combineReducers({
  toDoApp
})
const configureStore = (initialState) => createStoreWithMiddleware(reducer,initialState)
export default configureStore
