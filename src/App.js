import React from 'react';

class App extends React.Component{

    //함수 값 선언
    // component 의 상태
    state = {
      count: 0
    };

    add = () => {
      this.setState(current => ({ count : current.count + 1}));
    };

    minus =() => {
      this.setState(current => ({ count : current.count - 1}));
    };

    componentDidMount() {
        console.log("componentDidMount");
    };

    componentDidUpdate() {
        console.log("componentDidUpdate");
    };

    componentWillUnmount() {
        console.log("componentWillUnmount");
    };


    render() {

        console.log("rendering");
        // component 의 상태를 상수화
        // 함수 값을 상수화

        return(
           // 화면에 뿌려주는 구간
            <div>
                <h1>the number is {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>minus</button>
            </div>
        );
    }
}

export default App;