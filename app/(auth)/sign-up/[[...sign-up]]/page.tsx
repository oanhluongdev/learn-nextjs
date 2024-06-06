import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2e2a47]">Welcome Back!</h1>
          <p className="text-base text-[#7e8ca0]">
            Log in or Create account to get back to your dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>
        </div>
      </div>
      <div className="h-full bg-blue-500 hidden lg:flex items-center justify-center"></div>
    </div>
  );
};

export default SignUpPage;
