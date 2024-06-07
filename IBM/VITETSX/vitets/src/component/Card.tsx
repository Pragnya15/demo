
interface listData
{
   img:string;
   title:string;
   desc:string;
   caption:string
   button:string;
}


const Card=({img,title,desc,caption,button}:listData)=>{
    return(
        <>
        <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={img||'https://media.istockphoto.com/vectors/no-image-available-icon-vector-id1216251206?k=20&m=1216251206&s=170667a&w=0&h=A72dFkHkDdSfmT6iWl6eMN9t_JZmqGeMoAycP-LMAw4='} alt="Card image cap" id="img" />
        <div className="card-body">
        {/* <h5 className="card-title">{title==""?'No title':title}</h5> */}
        <h5 className="card-title">{title || 'No title available'}</h5>
        <p className="card-text">
        {desc||'No desc available'}
        </p>
        <a href="#" className={`btn btn-${button || 'primary'}`}>
         {caption||'No caption available'}
        </a>
    </div>
    </div>
        </>

    )



}

export default Card