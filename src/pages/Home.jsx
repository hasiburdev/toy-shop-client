import LoginForm from "../components/Auth/LoginForm";
import SignUp from "../components/Auth/SignUpForm";

const Home = () => {
  return (
    <div>
      <LoginForm />
      <SignUp />
      <h1>Home</h1>
    </div>
  );
};

export default Home;
