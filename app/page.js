import Image from "next/image";
import LoginPage from "./login/page";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <div className="flex border-red-900 justify-center m-auto">
        <LoginPage />
      </div></>
  );
}
