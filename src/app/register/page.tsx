import RegisterForm from "@/myComponents/RegisterForm";

export default async function RegisterPage() {
  return (
    <section className="p-10">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div className="flex items-center justify-center">
          <div className=" rounded-sm max-w-[500px]  shadow-[0px_5px_17px_-4px_rgba(0,0,0,0.37)]">
            <div>
              <h2 className="form-header">Sign Up</h2>
            </div>

            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}
