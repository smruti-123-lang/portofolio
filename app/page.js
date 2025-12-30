import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Page from "./content/page";
export default function Home() {
  return (
    <>
      <div className="flex border-red-900 justify-center m-auto">
        <Page />
      </div></>
  );
}
