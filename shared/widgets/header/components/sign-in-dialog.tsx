import { LabelInput } from "@/shared/ui/label-input";
import { Checkbox } from "@/shared/shad-cn/ui/checkbox";
import { Button } from "@/shared/shad-cn/ui/button";
import Image from "next/image";
import Link from "next/link";

export function SignInDialog() {
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-2">
        <h2 className="font-[500] text-[30px] text-[rgba(45,30,99,1)]">
          Hello👋
        </h2>
        <p className="text-[16px] text-gray-600">Sign in to access your account</p>
      </div>

      <div className="space-y-4">
        <LabelInput
          id="email"
          label="Email"
          value=""
          placeholder="Enter your email"
        />
        <LabelInput
          id="password"
          label="Password"
          value=""
          placeholder="Enter your password"
          type="password"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="remember" />
          <label
            htmlFor="remember"
            className="text-sm font-medium text-[rgba(45,30,99,1)]"
          >
            Keep me signed in
          </label>
        </div>
        <Link 
          href="#" 
          className="text-sm text-[rgba(114,77,247,1)] hover:underline"
        >
          Forgot Password?
        </Link>
      </div>

      <div className="space-y-4">
        <Button className="w-full" variant="purple">
          Sign In
        </Button>
        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
          <Image src="/google.png" alt="Google" width={20} height={20} />
          <span>Sign in with Google</span>
        </Button>
      </div>

      <div className="text-center text-sm">
        <span className="text-gray-600">Don't have an account? </span>
        <Link href="#" className="text-[rgba(114,77,247,1)] hover:underline">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
