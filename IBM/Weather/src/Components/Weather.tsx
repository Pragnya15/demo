import { useEffect, useState } from "react";
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-solid-svg-icons';
import '@fortawesome/react-fontawesome';

const Weather=({searchValue})=>{

    const [temp,setTemp]=useState();
    const [humidity,setHumidity]=useState();
    const [place, setPlace]=useState();
    const [desc,setDesc]=useState();
    const [wind,setWind]=useState();
    const[weatherimg, setWeatherImg]=useState('');

   const getWeatherDetails=()=>{
    // console.log(searchValue)
    // console.log(typeof searchValue); // "string"
   
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=070ad8c75e2bb5f3f6a14de557fe5bdf`)
    .then(res=>res.json())
    .then(json=>(setDesc(json.weather[0].main),setTemp(json.main.temp),setHumidity(json.main.humidity),
    setPlace(json.name),setWind(json.wind.speed),setWeatherImg(img[json.weather[0].main.toLowerCase()])))
   }   

   const img={
    'haze':'https://cdn-icons-png.flaticon.com/512/1779/1779765.png',
    'mist':'https://th.bing.com/th/id/OIP.3M_GTfG3cyUIl352LE5UIAHaHa?rs=1&pid=ImgDetMain'
    
    }

   useEffect(()=>{
    getWeatherDetails();
   },[searchValue]);
   

    return(
        <>
<section className="vh-100" style={{ backgroundColor: "#4B515D" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-8 col-lg-6 col-xl-4">
        <div className="card" style={{ color: "#4B515D", borderRadius: 35,width:'40rem',height:'20rem' }}>
          <div className="card-body p-4">
            <div className="d-flex">
              <h6 className="flex-grow-1">{place}</h6>
            </div>
            <div className="d-flex flex-column text-center mt-5 mb-4">
              <h6
                className="display-4 mb-0 font-weight-bold"
                style={{ color: "#1C2331" }}
              >
                {" "}
                {temp}K{" "}
              </h6>
              <span className="small" style={{ color: "#868B94" }}>
               {desc}
              </span>
            </div>
            <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                <div>
                  <i
                    className="fas fa-wind fa-fw"
                    style={{ color: "#868B94" }}
                  />{" "}
                  <span className="ms-1">{wind}</span>
                </div>
                <div>
                  <i
                    className="fas fa-tint fa-fw"
                    style={{ color: "#868B94" }}
                  />{" "}
                  <span className="ms-1">{humidity}</span>
                </div>
                
              </div>
              <div>
                <img
                  src={weatherimg}
                  width="100px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



        </>


    );
    
};
export default Weather;