import React, { Component } from 'react';
import Header from '../components/Header'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InitApi from '../api/initApi'
import ListImage from '../components/ListImage'

class DemoPage extends Component {
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
            <ListImage/>
        </div>
        );
    }
}

export default DemoPage