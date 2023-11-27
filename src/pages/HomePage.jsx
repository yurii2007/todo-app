import GetStartedBtn from "../components/GetStartedBtn";

const HomePage = () => {
  return (
    <section className="py-3 flex flex-col gap-3 items-center md:py-4">
      <h1 className="main-text text-3xl leading-9 tracking-normal font-semibold xl:text-5xl">
        Todo app
      </h1>
      <p className="secondary-text max-w-[320px] xl:text-xl">
        Effortlessly manage your tasks with our intuitive Todo app. Organize your day, set
        priorities, and never miss a deadline. Stay on top of your responsibilities and
        enhance productivity with easy-to-use features and seamless task tracking.
      </p>
      <GetStartedBtn />
    </section>
  );
};

export default HomePage;
