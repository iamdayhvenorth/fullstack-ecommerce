"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import LoginForm from "@/myComponents/LoginForm";
import { LoginData } from "@/actions/auth";

export default function LoginPage() {
  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    console.log(data);
  };

  return (
    <section className="p-10">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div className="flex items-center justify-center">
          <div className=" rounded-sm max-w-[424px] shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)]">
            <div>
              <h2 className="form-header">Sign In</h2>
            </div>

            <LoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}
