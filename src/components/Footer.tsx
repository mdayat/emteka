import { Logo } from "./icons/logo";
import { Linkedin } from "./icons/linkedin";

export function Footer() {
  return (
    <div className="w-full h-full bg-secondary-500 text-neutral-50 py-5">
      <div className="flex w-fit h-fit mx-auto">
        <div className="w-fit h-fit py-3.5">
          <Logo width={40} height={40} />
        </div>
        <h1 className="text-xl font-bold pt-5 ml-4">Emteka</h1>
      </div>

      <div className="w-fit h-fit mx-auto text-center px-8 mt-3">
        <p>Lorem Ipsum nanti ganti sama tagline atau gambaran produk</p>
        <div className="w-full h-[2px] bg-neutral-0 mt-7"></div>
      </div>

      <div className="w-fit h-fit mx-auto mt-7">
        <Linkedin width={25} height={25} />
      </div>
    </div>
  );
}
