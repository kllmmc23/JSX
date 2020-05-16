import React from "react";
import ReactDOM from "react-dom";
const YOURNAME = "Michael";
var date = new Date();
const CURRENTYEAR = date.getFullYear();
const img = 'https://image.shutterstock.com/image-photo/nice-evening-after-sunset-260nw-538099591.jpg';
ReactDOM.render(<div>
  <h1 className='heading'>My Fav Foods</h1>
  <p>Created by {YOURNAME}</p>
  <p>Copyright {CURRENTYEAR}</p>
  <div>
    <img src="https://static.toiimg.com/thumb/msid-44945488,width-748,height-499,resizemode=4,imgsize-291921/Nice-in-pictures.jpg" alt="img1" className='box' />
    <img src="https://media.istockphoto.com/photos/villefranche-sur-mer-cote-dazur-french-riviera-france-picture-id1052276576?k=6&m=1052276576&s=612x612&w=0&h=-A2BA47w1qz47AGI5nFUm2C9776bPKiQhEFiTHY0U9A=" alt="img2" className='box' />
    <img src="https://image.shutterstock.com/image-photo/nice-evening-after-sunset-260nw-538099591.jpg" alt="img3" className='box' />
    <img src={img} alt='img4' className='box' />
  </div>
</div>, document.getElementById("root"));
