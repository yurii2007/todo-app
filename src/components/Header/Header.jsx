import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <header className="flex justify-between px-4 py-3 bg-bg-primary">
      <h1>Todo App</h1>
      <NavMenu />
    </header>
  );
};

export default Header;
