import './App.css'

function App() {
  // This syntax is called JSX = JavaScript XML

  // useState is a function that returns an array of two elements
  // returns a state variable and a function
  // to update it
  
  return (
    <div className="screen">
      <video autoPlay muted loop id="myVideo">
        <source src="https://a2development.s3.amazonaws.com/H264HD1080.mov" type="video/mov" />
      </video>
      <div className="" id="fs-overlay">
      <img
        id="header-img"
        src='https://1000logos.net/wp-content/uploads/2021/08/Dungeons-and-Dragons-Logo-2014.png'
      />
      </div>
    </div>
  );
}

export default App;