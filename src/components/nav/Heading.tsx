import { ThemeToggle } from "../buttons/ModeSwitch";

export const Heading = () => {
  return (
    <header className="fixed right-10 top-10 z-50">
      <ThemeToggle />
    </header>
  );
};
