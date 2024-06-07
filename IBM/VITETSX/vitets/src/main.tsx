import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import ComponentLists from './component/ComponentLists.tsx'
// import ListGroupComponent from './component/ListGroupComponent.tsx'
// import Form from './component/Form.tsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './component/Card.tsx'
import Stopwatch from './component/Stopwatch.tsx'
import News from './component/News.tsx'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ComponentLists/> */}
     {/* <ListGroupComponent/> */}
    {/* <Form/> */}
     {/* <Card  img={"https://mir-s3-cdn-cf.behance.net/project_modules/1400/e7528a60196569.5a415ae1b8d34.jpg"} title={"Movie"} desc={"This is a movie card"} caption={"Movies"} button={"danger"}/>
     <br></br>
     <Card  img={"https://th.bing.com/th?id=OIP.YsEkLytIC_WzTmMNrO10mwHaLG&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"} title={"Food"} desc={"This is a food card"} caption={"Food Card"} button={"success"}/> */}


  {/* <div className="card">
  <div className="row">
  <Card img={"https://mir-s3-cdn-cf.behance.net/project_modules/1400/e7528a60196569.5a415ae1b8d34.jpg"} title={"Movie"} desc={"This is a movie card"} caption={"Movies"} button={"danger"}/>
  <Card  img={"https://th.bing.com/th?id=OIP.YsEkLytIC_WzTmMNrO10mwHaLG&w=204&h=306&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"} title={"Food"} desc={"This is a food card"} caption={"Food Card"} button={"success"}/> */}
  {/* <Card  img={""} title={""} desc={""} caption={""} button={""}/> */}
  {/* </div>
</div> */}

{/* <Stopwatch/> */}

{/* <News/> */}





<BrowserRouter>
<App />     
</BrowserRouter>

  </React.StrictMode>,
)








