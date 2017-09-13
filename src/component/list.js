import React from 'react';

const List = (props) => {
  const list = props.listItems.map((el,i) =>(
      <li key={i}><h2>el</h2></li>
    )),
  return (
      <div>
        I'm a list !!
      </div>

    )
}
export default List
