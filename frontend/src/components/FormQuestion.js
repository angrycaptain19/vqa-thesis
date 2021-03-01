import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {
    QUESTION_INPUT,
    SUBMIT
} from './constant'
import '../asset/css/FormStyle.css'
import UploadContentApi from '../api/uploadContentApi'


const FormQuestion = (props) => {
  const [question, setQuestion] = useState("")
  const [id, setId] = useState(1)

  const handleChangeQuestion = (e) => setQuestion(e.target.value)
  const handleChangeId = (e) => setId(e.target.value)
  const handleSummit = () => {
    UploadContentApi.post({id, question}).then(() => {
      console.log("Upload Successful")
    })
  }
  return (
    <Form className='form'>
      <FormGroup>
        <Label for="exampleSelect">Select Image</Label>
        <Input type="select" 
               name="select" 
               id="exampleSelect" 
               onChange={handleChangeId}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">{ QUESTION_INPUT }</Label>
        <Input className="textarea" 
               type="textarea" 
               name="text" 
               id="exampleText" 
               onChange={handleChangeQuestion}

        />
      </FormGroup>
      <Button onClick={ handleSummit }>{ SUBMIT }</Button>
    </Form>
  );
}

export default FormQuestion;