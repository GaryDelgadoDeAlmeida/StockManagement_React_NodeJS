import React from 'react';
import { Provider } from 'react-redux';
import Header from './component/part/Header';
import RoutesConfig from './component/RoutesConfig';
import { store } from "./redux/initalStore"
import './style/index.scss';

function App() {
  return (
    <Provider store={store}>
      <div className={"gestion-stock-app"}>
        <div className={"left-side"}>
          <Header />
        </div>

        <div className={"right-side"}>
          <div className={"container"}>
            <RoutesConfig />
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
