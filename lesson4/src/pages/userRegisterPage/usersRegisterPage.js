import React from "react";
import {Row, Col, Form, Button, Container, Spinner} from 'react-bootstrap'
import react, {useState} from "react";
import { addUserAction } from "../../redux/actions";
import { useDispatch } from "react-redux";


function UserRegisterPage(){
   const dispatch = useDispatch()

   const [user, setUser] = useState({
      name: '',
      surname: '',
      email: ''
   })

   const formValue = (event) =>{
      setUser({
         ...user,
         [event.target.name]: event.target.value
      })
   }
   
   const addUser = (event) => {
      
      event.preventDefault();
      console.log("Adding user:", user);
      dispatch(addUserAction(user));
   };




   return(
      <Container>
         <Form onSubmit={addUser}>
            <Row>
                <Col lg={3}>
                    <Form.Group className='mb-3' controlId="name">
                        <Form.Control
                            type="text"
                            placeholder='name'
                            name='name'
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className='mb-3' controlId="username">
                        <Form.Control
                            type="text"
                            placeholder='username'
                            name='username'
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className='mb-3' controlId="email">
                        <Form.Control
                            type="text"
                            placeholder='email'
                            name='email'
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Button type='submit' variant='success' className='w-100'>
                        register user
                    </Button>
                </Col>
            </Row>
        </Form>
      </Container>
   )
}
export default UserRegisterPage