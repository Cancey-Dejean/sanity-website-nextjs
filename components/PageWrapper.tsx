import Header from "./Header";
import Footer from "./Footer";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-[100dvh] grid-rows-[1fr_auto]">
      <Header />
      <main role="main">{children}</main>

      <Footer />
    </div>
  );
};

export default PageWrapper;
