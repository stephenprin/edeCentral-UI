import React from 'react';
import { useNavigate } from 'react-router-dom';
import FormRow from '../components/FormRow';
import Wrapper from '../assets/wrappers/Register';
import { useAppContext } from '../context/context';


const initialValue = {
    name: '',
    email: '',
    password: '',
    phone: '',
    isMember: true,
  
}

const Register = () => {
    const navigate = useNavigate();
    const [values, setValues] = React.useState(initialValue);
    const { user, isLoading } =useAppContext();
  
    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };
  
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, password, isMember } = values;
        if (!email || !password || !phone || (!isMember && !name)) {
           
        
        }
    }
        //   if (isMember) {
        //     setupUser({
        //       currentUser,
        //       endPoint: 'login',
        //       alertText: 'Login Successful! Redirecting...',
        //     });
        //   } else {
        //     setupUser({
        //       currentUser,
        //       endPoint: 'register',
        //       alertText: 'User Created! Redirecting...',
        //     });
        //   }
        // };
  
        // useEffect(() => {
        //     if (user) {
        //         setTimeout(() => {
        //             navigate('/');
        //         }, 3000);
        //     }
        // }, [user, navigate]);
        return (
            <Wrapper className='full-page'>
            
                <form className='form' onSubmit={onSubmit}>
                    <h2>eduCentrAL</h2>
                    <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                   
                   
                    {!values.isMember && (
                        <FormRow
                            type='text'
                            name='name'
                            value={values.name}
                            handleChange={handleChange}
                        />
                    ) 
                    
                    }
                    {/* phone input */}
                    {!values.isMember && (
                         <FormRow
                         type='text'
                         name='phone'
                         value={values.phone}
                         handleChange={handleChange}
                     />
                    )}
  
                    <FormRow
                        type='email'
                        name='email'
                        value={values.email}
                        handleChange={handleChange}
                    />
                    {/* password input */}
                    <FormRow
                        type='password'
                        name='password'
                        value={values.password}
                        handleChange={handleChange}
                    />
                    <button type='submit' className='btn btn-block'>
                        submit
                    </button>
                    <p>
                        {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                        <button type='button' onClick={toggleMember} className='member-btn'>
                            {values.isMember ? 'Register' : 'Login'}
                        </button>
                    </p>
                </form>
            </Wrapper>
        );
    };

export default Register;