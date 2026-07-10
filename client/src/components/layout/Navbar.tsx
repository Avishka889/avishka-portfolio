import Button from "../ui/Button";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import { navigation } from "../../constants/navigation";

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#" variant="secondary" className="px-5 py-2">
            Resume
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;