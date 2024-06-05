import React, { useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Login = () => {


  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string().required("Password is required")
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: SignupSchema,
  });



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.subtitle}>Login to your account to continue</Text>
      <Text style={styles.error}>
   
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {formik.touched.email && formik.errors.email ? (
        <Text style={styles.error}>{formik.errors.email}</Text>
      ) : null}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        secureTextEntry
      />
      {formik.touched.password && formik.errors.password ? (
        <Text style={styles.error}>{formik.errors.password}</Text>
      ) : null}
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <Button
        title="Login"
        onPress={formik.handleSubmit}
        color="#BE0811"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30 ,
    marginTop: '30%',
    marginBottom: '20%',
    borderRadius:20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:10
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '10',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 5,
    paddingLeft: '30%',
    paddingRight:"30%",
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  forgotPassword: {
    color: '#9E0000',
    marginBottom: 20,
  },
});

export default Login;
