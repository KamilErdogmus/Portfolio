import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 ">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <h1 className="font-semibold text-4xl">
            Kâmil
            <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Desktop && contact */}
        <div className="hidden xl:flex items-center justify-between gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
