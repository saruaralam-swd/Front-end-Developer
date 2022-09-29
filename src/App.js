import './App.css';
import Question from './Components/Question/Question';
import Workouts from './Components/Workouts/Workouts';

function App() {
  return (
    <div className='container'>
     <Workouts></Workouts>
     <Question></Question>
    </div>
  );
}

export default App;
