import { Formik, Form, Field } from 'formik'
import { useId } from 'react';
import { useNavigate } from 'react-router-dom';



export const LoginPage = () => {

    const navigate = useNavigate();

    const nameFieldId = useId()

    const handleSubmit = (values, actions) => {
        
        if (values.username === 'admin' && values.password === 'admin') {
          navigate('home')
        } else {
          alert('Неверный логин или пароль')
        }

        actions.resetForm()
    }

    const initialValues = {
        username: '',
        password: ''
    }



    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <Form>
                <label htmlFor={nameFieldId}>Login</label>
                <Field type='text' id={nameFieldId} name='username'/>

                <label>Password</label>
                <Field type='password' name='password'/>

                <button type='submit'>Log in</button>
            </Form>
        </Formik>
    );
}