
import './App.css';
import Lieu from './components/profil/Adresse';
import Nom from './components/profil/FullName';
import Picture from './components/profil/ProfilPhoto';



const App= ()=> {
  return (
    <div>
      <Picture/>
      <Nom/>
      <Lieu/>
      
    </div>
    
    );
}

export default App;
