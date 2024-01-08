import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import SliderBar from './components/SliderBar'
import About from './components/About'
import CamCard from './components/CamCard'

import img11 from './assets/cam/11.jpg'
import img12 from './assets/cam/13.jpg'
import img13 from './assets/cam/13.jpg'
import img21 from './assets/cam/21.jpg'
import img22 from './assets/cam/22.jpg'
import img31 from './assets/cam/31.jpg'
import img32 from './assets/cam/32.jpg'
import img33 from './assets/cam/33.jpg'
import img41 from './assets/cam/41.jpg'
import img42 from './assets/cam/42.jpg'
import img51 from './assets/cam/51.jpg'
import img52 from './assets/cam/52.jpg'
import img53 from './assets/cam/53.jpg'
import CardSection from './components/CardSection'


function App() {
  
  const [cartCount,setCartCount]=useState(0);
  const [cartIndex, setCartIndex] = useState(null);
  const [uniqueItems, setUniqueItems] = useState(new Set());
  const [arrAdd,setArrAdd]=useState([]);



  
  const addToCart=(addToCart)=>{
    
    setCartCount(cartCount+1);
    console.log(cameraShowList[addToCart])
    setCartIndex(cameraShowList[addToCart])

    setArrAdd((prevCart) => {
      return prevCart.length === 0 ? [cameraShowList[addToCart]] : [...prevCart, cameraShowList[addToCart]];
    });
    setUniqueItems((prevItems) => new Set([...prevItems, addToCart]));
    //console.log(arrAdd)


  }


 


  const cameraShowList=[
    {id:1,model:"Canon",title:"Canon EOS M50 Mark II Mirrorless",price:"245000",img1:img11,img2:img12,img3:img13,matirial:"EOS M50",wifi:"-",display:"3'",view:"Electronic",sensor:"CMOS",lensor:"-",pixel:"24.1",iso:"Auto, 100 to 25600 (Extended: 100 to 51200)",battery:"1 x LP-E12 Rechargeable Lithium-Ion, 7.2 VDC, 875 mAh",rate:5,sale:250},
    {id:2,model:"canon",title:"Canon 3000D with Canon EF-S",price:"145000",img1:img21,img2:img22,matirial:"Canon 3000D",wifi:"Yes",display:"2.7'",view:"Eye-level pentamirror",sensor:"CMOS",lensor:"18-55mm lens",pixel:"18",iso:"100-6400",battery:"LP-E10",rate:4.7,sale:260},
    {id:3,model:"canon",title:"Canon EOS 250D DSLR Camera",price:"218000",img1:img31,img2:img32,img3:img33,matirial:"EOS 250D",wifi:"Yes",display:"3'",view:"Optical pentamirror",sensor:"CMOS",lensor:"18-55mm lens",pixel:"24.5'",iso:"100-25600",battery:"1 x LP-E10",rate:3.2,sale:60},
    {id:4,model:"canon",title:"Canon EOS 200D Mark II",price:"240000",img1:img42,img2:img41,matirial:"EOS 200D",wifi:"Yes",display:"3'",view:"Eye-level pentamirror",sensor:"CMOS",lensor:"18-55mm lens",pixel:"24.5'",iso:"Auto, 100 to 51200",battery:"LP-E17",rate:5,sale:150},
    {id:5,model:"Nikon",title:"Nikon D7500 DSLR Camera",price:"368000",img1:img53,img2:img52,img3:img53,matirial:"D7500",wifi:"Yes",display:"3.2'",view:"Optical pentamirror",sensor:"CMOS",lensor:"18-140mm lens",pixel:"20.9'",iso:"100-25600",battery:"1 x EN-EL15a",rate:4.9,sale:240},
    {id:6,model:"Nikon",title:"Nikon D3500 DSLR Camera",price:"447000",img1:img51,img2:img52,img3:img53,matirial:"D3500",wifi:"Yes",display:"3.2'",view:"Optical pentamirror",sensor:"CMOS",lensor:"18-140mm lens",pixel:"20.9'",iso:"100-25600",battery:"1 x EN-EL15a",rate:4.8,sale:234},
    {id:7,model:"Nikon",title:"Nikon EOS DSLR Camera",price:"238000",img1:img52,img2:img51,img3:img53,matirial:"EOS 500",wifi:"Yes",display:"3.2'",view:"Optical pentamirror",sensor:"CMOS",lensor:"18-140mm lens",pixel:"20.9'",iso:"100-25600",battery:"1 x EN-EL15a",rate:4,sale:175},
    {id:8,model:"Nikon",title:"Nikon D1500 DSLR Camera",price:"567000",img1:img31,img2:img52,img3:img53,matirial:"D1500",wifi:"Yes",display:"3.2'",view:"Optical pentamirror",sensor:"CMOS",lensor:"18-140mm lens",pixel:"20.9'",iso:"100-25600",battery:"1 x EN-EL15a",rate:4.1,sale:100},
  
  ]
  
 

  return (
   <div>
    <Navbar cartCount={cartCount} shopList={cameraShowList} cartIndex={cartIndex} arrAdd={[...uniqueItems]}/>
    <Header/>
    <SliderBar/> 
    <About/>
    <CamCard camList={cameraShowList} />
    <CardSection shopList={cameraShowList} addToCart={addToCart}/>
   </div>
  )
}

export default App
