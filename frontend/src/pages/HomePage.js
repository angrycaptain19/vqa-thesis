import React, { Component } from 'react';
import Header from '../components/Header'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InitApi from '../api/initApi'
class HomePage extends Component {
    state = {
      message: " "
    }

    componentDidMount() {
        InitApi.getInfo()
          .then(res => {
            const message = res.data;
            this.setState({ message });
          })
    }
  

    render() {
        return (
        <div>
            <Header/>
            {/* Thiet ke input load image va cau hoi */}
            {this.state.message}
        </div>
        );
    }
}

export default HomePage