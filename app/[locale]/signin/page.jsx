'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password }); // Handle authentication logic
  };
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-neutral-900">
      <div className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
        <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Sign in</h1>
        <p className="mt-2 text-sm text-center text-gray-600 dark:text-neutral-400">
          Don't have an account?{' '}
          <Link href="/signup" className="text-blue-600 hover:underline dark:text-blue-500">
            Sign up here
          </Link>
        </p>

        <button className="w-full mt-5 py-3 px-4 flex items-center justify-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
          <svg className="w-4 h-auto" viewBox="0 0 46 47" fill="none">
            <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L38.5191 41.2719C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
            <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L2.61097 33.7812C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
          </svg>
          Sign in with Google
        </button>

        <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:mr-6 after:flex-1 after:border-t after:border-gray-200 after:ml-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
          Or
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">Email address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              className="w-full p-3 mt-1 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <div className="flex justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-white">Password</label>
              <Link href="/recover-account" className="text-sm text-blue-600 hover:underline dark:text-blue-500">Forgot password?</Link>
            </div>
            <input 
              type="password" 
              id="password" 
              name="password" 
              className="w-full p-3 mt-1 border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center">
            <input id="remember-me" type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700" />
            <label htmlFor="remember-me" className="ml-2 text-sm dark:text-white">Remember me</label>
          </div>

          <button type="submit" className="w-full py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}