import logo from './logo.svg';
import './App.css';
import MediaFile from './component/mediaFile';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <MediaFile></MediaFile>
      </Provider>
    </div>
  );
}

export default App;
