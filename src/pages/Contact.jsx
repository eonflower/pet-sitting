import ContactForm from "../components/ContactForm";
import logo from "../assets/gentle-circle.png"

export default function Contact() {
  return (
    <div className="page-container contact">
      <h1 className="page-title">Contact</h1>
      <img className="logo" src={logo} alt="gentle critter logo with butterfly" />
    <ContactForm />
    </div>
  );
}