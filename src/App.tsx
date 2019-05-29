import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class App extends React.Component {

  public render() {
    const newFunction = this.handleToggleEdit2.bind(this);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={newFunction}>적용</button>
      </div>
    );
  }

  private getData3():Promise<any> {
    // tslint:disable-next-line:only-arrow-functions
    return new Promise(function (resolve, reject) {
      // tslint:disable-next-line:only-arrow-functions
      console.log("1");
      fetch('//api.github.com/users/lquixada')
      .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        console.log("3");
        console.log("promise res :" + res);
        console.log(res);
        resolve(res);
      })
      .then(user => {
        console.log("4");
        console.log("user >>> " + user);
        resolve(user);
      })
      .catch(err => {
        reject(new Error("Request is failed"));
      });
      console.log("2");
    });
  }
  
  private handleToggleEdit2():void {
    // Fulfilled 또는 Rejected의 결과 값 출력
    console.log("start");
    // tslint:disable-next-line:only-arrow-functions
    this.getData3().then(function (data) {
      console.log("5");
      console.log("getdata Data :" + data); // response 값 출력
    // tslint:disable-next-line:only-arrow-functions
    }).catch(function (err) {
      console.error("getdata err :" + err); // Error 출력
    });
  }
}

export default App;
