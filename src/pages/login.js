import React from 'react';
import LoginForm from '@/components/LoginForm';
import GoogleLogin from '@/components/GoogleLogin';

function LoginPage() {
  return (
    <div>
      <LoginForm />
      <GoogleLogin />
    </div>
  );
}

export default LoginPage;
