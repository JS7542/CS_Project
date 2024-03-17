import "../css/sidebar.css";

const sideBar = () => {
  const Slide=(e)=>{
    const check_toggle = e.currentTarget.children[1]; 
    const ul_toggle = e.currentTarget.children[2];

    if(check_toggle.checked===false){
        ul_toggle.style.height='15vh';
        ul_toggle.style.padding='1vh 0 0 0.5vw';
        check_toggle.checked = true;
    }
    else{
        ul_toggle.style.height=0;
        ul_toggle.style.padding=0;
        check_toggle.checked = false;
    }
  }
  return ( 
    <div className="Wrapper">
        <div onClick={(e)=>{Slide(e)}}>
            <h1>Category1</h1>
            <input type="checkbox" className="check"></input>
            <ul className="category1">
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </div>
        <div onClick={(e)=>{Slide(e)}}>
            <h1>Category1</h1>
            <input type="checkbox" className="check"></input>
            <ul className="category1">
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </div>
        <div onClick={(e)=>{Slide(e)}}>
            <h1>Category1</h1>
            <input type="checkbox" className="check"></input>
            <ul className="category1">
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </div>
        <div onClick={(e)=>{Slide(e)}}>
            <h1>Category2</h1>
            <input type="checkbox" className="check"></input>
            <ul className="category1">
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </div>
        <div onClick={(e)=>{Slide(e)}}>
            <h1>Category3</h1>
            <input type="checkbox" className="check"></input>
            <ul className="category1">
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </div>
    </div>
  );
};
export default sideBar;
