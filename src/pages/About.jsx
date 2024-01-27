import logo from "../assets/gentle-circle.png";

export default function About() {
  return (
    <div className="page-container">
      <img
        className="logo"
        src={logo}
        alt="gentle critter logo with butterfly"
      />
      <h1 className="page-title">About</h1>
      <div className="about">
        <span>
          <p>
            Hey there! I'm Aloe, your go-to critter sitter. I'm located in
            Portland, Oregon. I've been surrounded by furry pals my whole life,
            and now I'm here to make sure your pets get the love and care they
            deserve. From quick check-ins to month-long hangouts (or even longer
            if you need), I'm all about making sure your pets feel at home when
            you can't be there. 
            </p>
            <p>
            Need meds, including insulin, sorted? No
            problem. Got a feisty friend who needs some extra TLC? I've got it
            covered. I'm not just a pet sitter; I'm a friend who gets how
            important these little (or not-so-little) babes are in our lives.
            Let's chat and figure out how I can make your pets' days a little
            brighter – and your life a bit easier!
          </p>
        </span>
      </div>
    </div>
  );
}
