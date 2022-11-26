import { LayoutProps } from "../../typings";

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="container flex h-screen items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
