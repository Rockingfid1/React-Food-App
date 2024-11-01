import logo from "../assets/logo.jpg";
import CartButton from "./CartButton";

export default function Header() {
  return (
    <header className="flex flex-row justify-between py-10 px-40">
      <span className="flex flex-row gap-3 items-center ">
        <img
          className="h-16 rounded-full border-2 border-amber-400"
          src={logo}
          alt="food logo"
        />
        <h1 className="text-amber-400 tracking-widest text-2xl font-medium font-sans">
          REACTFOOD
        </h1>
      </span>

      <CartButton />
    </header>
  );
}
