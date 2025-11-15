import SignInForm from "@/components/public/auth/sign-in/form";

const Page: React.FC = () => {
  return (
    <section className="h-screen -mt-5 md:-mt-16 flex flex-col justify-center items-center">
      <SignInForm />
    </section>
  );
};

export default Page;
