import { useState } from "react";

const items: string[] = ["BMW", "AUDI", "MERCEDES"];



const ListGroupComponent = () => {
  const [SelectedIndex, setSelectedIndex]=useState(-1);
  const liItem = items.map((item,index) => <li key={item} className={SelectedIndex===index?"list-group-item active":"list-group-item"} onClick={()=>setSelectedIndex(index)}>{item}</li>);
  return (
    <>
      <ul className="list-group">{liItem}</ul>
    </>
  );
};

export default ListGroupComponent;
