const ComponentLists =()=>{
    const items:string[]=['abc','def']
    const liItem=items.map((item)=> <li>{item}</li>)
        return(
            <>
            <ul>{liItem}</ul>

            </>
        )
    }
    
    export default ComponentLists