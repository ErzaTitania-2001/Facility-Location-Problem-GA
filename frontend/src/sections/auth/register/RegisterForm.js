import * as Yup from 'yup';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';

import {auth} from '../../../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../../firebase";
import { addDoc, collection } from "firebase/firestore";


// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [userData,setUserData]=useState({
    email:"",
    password:"",
    userstatus: 0
  })
  const UserRef = collection(db, "users");

  const AddUser=()=>{
    addDoc(UserRef, {
      email: userData.email,
      password: userData.password,
      userstatus: userData.userstatus // 0: buyer 1: seller 2: admin
    }).then(val=>{
      console.log("SuccessCreateUser",val);
    }).catch(err=>{
      console.log(err);
    })
  }
  // const auth = getAuth();

    

  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().required('First name required'),
    lastName: Yup.string().required('Last name required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
    userstatus: Yup.string().required('User type is required')
  });

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    userstatus: 0
  };

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (e) => {

        e.preventDefault();
        createUserWithEmailAndPassword(
          auth,
    userData.email, userData.password
    ).then(user => {
      AddUser();

    console.log(user)
    }).catch(err => {
    console.log(err)
    })
  };

  return (
    <FormProvider methods={methods} onSubmit={e=>onSubmit(e)}>
      <Stack spacing={3}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
          <RHFTextField name="firstName" label="First name" />
          <RHFTextField name="lastName" label="Last name" />
        </Stack>

        <RHFTextField name="email" label="Email address"  value={userData.email} onChange={
            (e)=>{
              console.log(e.target.value)
              setUserData(prev=>({
                ...prev,
                'email':e.target.value
              }))
            }
        } />

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
                <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">User type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={userData.userstatus}
            label="User type"
            onChange={(e) => {
              setUserData((prev) => ({
                ...prev,
                'userstatus': e.target.value
              }))
            }}
          >
            <MenuItem value={0}>Buyer</MenuItem>
            <MenuItem value={1}>Seller</MenuItem>
          </Select>
        </FormControl>

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Register
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
