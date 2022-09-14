import Header from './component/Header';
import AdPages from './component/AdPages';
import MainPage from './component/MainPage';
import FooterPage from './component/FooterPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <AdPages />
      <MainPage />
      <FooterPage />
    </div>
  );
}

export default App;
