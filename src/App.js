import React from "react";
import "./App.css";

import Layout from './hoc/Layout/Layout';
import MainPage from './containers/MainPage';

function App() {
  return (
    <div className="App">
      <Layout>
        <MainPage />
      </Layout>
    </div>
  );
}

export default App;
