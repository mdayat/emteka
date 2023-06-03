import { Logo } from "./icons/logo";
import { Menu } from "./icons/menu";

export function Navbar() {
  return (
    <div className="w-full h-[71px] bg-transparent flex px-5 justify-between">
      <div className="flex">
        <div className="w-fit h-fit py-3.5">
          <Logo width={40} height={40} />
        </div>
        <h1 className="text-xl font-bold pt-5 ml-4">Emteka</h1>
      </div>

      <div className="w-fit h-fit py-3.5">
        <Menu width={40} height={40} />
      </div>
    </div>
  );
}
