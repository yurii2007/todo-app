import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="flex justify-between px-5 py-4 md:px-7 md:py-6">
      <h1 className="text-lg font-semibold text-font-primary">Todo App</h1>
      <NavMenu />
    </header>
  );
};

export default Header;
