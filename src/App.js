import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/alert';

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setmode("dark");
      document.body.style.backgroundColor = "rgb(51 50 52)";
      showAlert("dark mode has been enabled","success");
      // user need to distract and get attention on that line
      // setInterval(() => {
      //   document.title = 'TextUtils is good';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install My TextUtils App';
      // }, 1500);
    }else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled","success");
    }
  }

  return (
    <>
      <Navbar title="WordAnalyzer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className='container my-3'>
        <TextForm heading="Enter The Text To Analyze Below" showAlert={showAlert} mode={mode}/>
      </div>
    </>
  );
}

export default App;
