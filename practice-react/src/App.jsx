
import './App.css'
import PlayButton from './Components/PlayButton/PlayButton'

function App() {
  const handleClick=(message)=>{
    alert(message)
  }
  return (
    <div className="App">
      <PlayButton message="play-button" handleClick={handleClick}>Play</PlayButton>
      <PlayButton message="pause-button" handleClick={handleClick}>Pause</PlayButton>
    </div>
  )
}

export default App
