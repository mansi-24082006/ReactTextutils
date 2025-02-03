import React,{ useState} from 'react'

export default function About(props) {

    const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black',
        border: '2px solid',
        borderColor:'blue'
    }) 
    const [btnText, setBtnText] = useState("Enable Dark Mode")
    const toggleStyle = ()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '2px solid',
                borderColor:'blue'
            })
            setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor: 'white',
                border: '2px solid',
                borderColor:'skyblue'
            })
            setBtnText("Enable Dark Mode")
        }
    }
// let myStyle = {
//         color: props.mode ==='dark'?'white':'#042743',
//         backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white', 
//     }
    
return (
<div className="container" style={myStyle}>
    <h1 className="my-3" style={{color: props.mode ==='dark'?'white':'blue'}}>About Us</h1>
<div class="accordion" id="accordionExample" style={myStyle}>
  <div class="accordion-item" style={myStyle}>
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
      <strong> Nature quotes</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        <p>Mother Nature is the ultimate inspiration. When you're feeling sluggish, simply walking outside and getting fresh air can do wonders for your mood and outlook. Often, nature's beauty can take your breath (and words) away. In those moments of awe, we like to turn to some of our favorite nature quotes that sum up how we're feeling.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item"style={myStyle}>
    <h2 class="accordion-header" style={myStyle}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
        <strong>Nature beauty</strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        <p>"Keep your face always toward the sunshine, and shadows will fall behind you." "Sunshine is delicious, rain is refreshing, wind braces us up, snow is exhilarating; there is really no such thing as bad weather, only different kinds of good weather.
        </p>
      </div>
    </div>
  </div>
  <div class="accordion-item"style={myStyle}>
    <h2 class="accordion-header" style={myStyle}>
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
      <strong>Nature Importance our Life</strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={myStyle}>
        <p>Nature is important for us because it provides essential resources, improves our health, and connects us to a larger world. </p>
      </div>
    </div>
  </div>
</div>
<div className="container my-3">
<button onClick={toggleStyle} type="button" class="btn btn-primary">{btnText}</button>
</div>
</div>
)
}
