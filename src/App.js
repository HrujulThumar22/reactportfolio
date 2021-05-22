import './App.css';
import MyNavbar from './components/navbar/navbar'
import MyCarousel from './components/carousel/carousel'
import TitleMessage from './components/titleMesssage/titlemessage'

const App=()=> {
  return (
    <div>
      <MyNavbar/>
      <MyCarousel/> 
      <TitleMessage/>
      My Portfolio

    </div>
  );
}

export default App;
