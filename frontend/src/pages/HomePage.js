import React, { Component } from 'react';
import Header from '../components/Header'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import InitApi from '../api/initApi'
import UploadQuestion from '../components/UploadQuestion'
import UploadImage from '../components/UploadImage'
import UploadImageApi from '../api/uploadImageApi';
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

            <UploadQuestion/>
            <UploadImage/>
        </div>
        );
    }
}

export default HomePage