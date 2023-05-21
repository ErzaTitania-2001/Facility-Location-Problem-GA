import * as Yup from 'yup';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const auth=getAuth();
  
  const [showPassword, setShowPassword] = useState(false);
  const [userData,setUserData]=useState({
    email:"",
    password:"",
  })

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: '',
    password: '',
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
    const user = {
    uid: userAuth.uid,
    email: userAuth.email
    }
    console.log("USER",user)
    if (userAuth) {
    console.log('userAuth', userAuth)
    // setUser(user)
    localStorage.setItem('userData',JSON.stringify(user));

    } else {
    // setUser(null)
    localStorage.clear();
    }
    })
    return unsubscribe
    }, [])
    

  const onSubmit = async (e) => {

    e.preventDefault();
    // localStorage.setItem('userData',userData);

    signInWithEmailAndPassword(
      auth,
      userData.email, userData.password
      ).then(user => {
      console.log('user', user)
      }).catch(err => {
      console.log(err)
      })
    
    // navigate('/dashboard', { replace: true });
    // if(userData.email==='admin@admin.com'){
    //   navigate('/dashboard/user',{replace:true});
    // }
    // if(userData.email==='user@user.com'){
    //   navigate('/dashboard/products',{replace:true});
    // }
    // if(userData.email==='client@client.com'){
    //   navigate('/client/app',{replace:true});
    // }
    
    
  };


  return (
    <FormProvider methods={methods} onSubmit={(e)=>onSubmit(e)}>
      <Stack spacing={3}>
        <RHFTextField name="email" label="Email address" value={userData.email} onChange={
            (e)=>{
              console.log(e.target.value)
              setUserData(prev=>({
                ...prev,
                'email':e.target.value
              }))
            }
        }/>

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={userData.password} onChange={
            (e)=>{
              console.log(e.target.value)
              setUserData(prev=>({
                ...prev,
                'password':e.target.value
              }))
            }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <RHFCheckbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        Login
      </LoadingButton>
    </FormProvider>
  );
}
