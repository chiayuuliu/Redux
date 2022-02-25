import React, { Component } from 'react';
import Count from './components/Count';

// 會直接帶入 count 資料夾裡的index.js
class App extends Component {
    render() {
        return (
            <div>
                <Count/>
            </div>
        );
    }
}

export default App;
