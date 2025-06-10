"use client";

import { SignIn } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter();
  
  return (
    <>
      <div className='flex flex-col justify-center items-center mt-32'>
        <SignIn afterSignInUrl="/dashboard" />
      </div>
    </>
  );
}