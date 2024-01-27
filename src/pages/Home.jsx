import HexContainer from "../components/HexContainer";
import logo from "../assets/gentle-circle.png"

export default function Home() {
  return (
    <>
    <img className="home-logo" src={logo} alt="gentle critter logo with butterfly" />
    <HexContainer />
    </>
  
  );
}