import { LayoutProps } from "../../typings";
import Logo from "../../assets/logo.svg";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container flex min-h-[600px] flex-col items-center justify-center pt-16 md:h-screen ">
      <header className="pb-16 md:-mt-24">
        <h1 className="text-xl font-bold uppercase tracking-[0.45rem]">
          <span className="sr-only">
            Spli
            <br />
            tter
          </span>
          <img src={Logo} alt="Splitter Logo" />
        </h1>
      </header>
      <main className="w-full max-w-[920px] rounded-2xl bg-white p-7 shadow-2xl shadow-black/10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
