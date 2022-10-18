import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollingCarousel from "../src/components/ScrollingCarousel"
import bg from "./assets/bg.png";

function App() {
  return (
    <div className='main container-fluid row m-auto  p-0'>
      <div className='main-photo col-12 col-xl-6 p-0'>
        <img src={bg} alt="bg"/>
      </div>
      <div className='product-section col-12 col-xl-6 row'>
        <div className="content col-12 ">
          <h1>Everyday items, we have something to suit every occasion.</h1>
          <p className="d-xl-block d-none">At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida cursus.</p>
          <button className="text-button"> Shop All Everydat Items</button>
        </div>
        <div className="scroll col-12 ">
            <ScrollingCarousel/>
        </div>
      </div>
    </div>
  );
}

export default App;
