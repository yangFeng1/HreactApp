import React from 'react';

const List = (props) => {
  const list = props.listItems.map((el,i) =>(
      <li key={i} style={el.done?{textDecoration:'line-through',fontSize: '20px'}:{textDecoration: 'none', fontSize: '20px'} }
        ><span onClick={props.onClick.bind(null,i)} >完成</span><p >{el.item}</p>
        <button className=" btn btn-danger" onClick={props.clickDelBtn.bind(null,i)}>删除</button>
        </li>

    ))
  return (
      <div>
       <ul>
        {list}
       </ul>
      </div>

    )
}
export default List
