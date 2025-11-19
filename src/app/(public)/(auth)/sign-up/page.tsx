import SignUpForm from "@/components/public/auth/sign-up/form";

const SignIn: React.FC = () => {
  return (
    <section className="h-screen -mt-5 md:-mt-16 flex flex-col justify-center items-center">
      <SignUpForm />
    </section>
  );
};

export default SignIn;
