import '../style/MainPage.css';
import {Header} from './Header';

// Right now this is the main entry point.
function MainPage() {
  return (
    <div>
      <Header/>
      <div className="MainPage">
        Welcome to the Practicer. The goal of this app is to help you track your practices and help you generate some cool stats.
      </div>
    </div>
  );
}

export default MainPage;
