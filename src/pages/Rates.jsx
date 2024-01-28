import logo from "../assets/gentle-circle.png"

export default function Rates() {
  return (
    <div className="page-container">
      <h1 className="page-title">Rates</h1>
      <img className="logo" src={logo} alt="gentle critter logo with butterfly" />
    
    <div className="rates">
      <span className="cat-rates">
        <h2>Cat Rates</h2>
        <p>
          $40 per day
          <br />
          $30/day for quick visits
        </p>
      </span>
      <span className="dog-rates">
        <h2>Dog Rates</h2>
        <p>
          $50 per day for 1 dog
          <br />+ $20 for an additional dog
        </p>
      </span>
      <span className="misc-rates">
      <h2>Miscellaneous</h2>
			<p>
			~ Other critter rates are case by case basis
			<br />
			~ Additional fees may be added on for pets with higher needs
			<br />
			~ Discounted rates available for BIPOC and trans folks
			</p>
      </span>
    </div></div>
  );
}
