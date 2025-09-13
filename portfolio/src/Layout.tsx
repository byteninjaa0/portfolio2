import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="ml-2 text-center text-[12px] text-gray-400 font-thin">
        Sohail Khan © 2025
      </footer>
    </div>
  )
}
export default Layout;