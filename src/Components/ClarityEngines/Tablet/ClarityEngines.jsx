import './ClarityEngines.css';

export default function ClarityEngines() {
  return (
    <div className="ClarityEngines-PC">
      <div className="des center">
        <h1 className="pls-600">The Four Engines of Clarity</h1>
      </div>

      {/* First row with AIM and VEY */}
      <div className="Engines1 pls center">
        <div className="AIM"><h1>AIM Logic</h1></div>
        <div className="VEY"><h1>VEY Formula</h1></div>
      </div>

      {/* Second row with BoxA and BoxB */}
      <div className="Engines2 pls center">
        <div className="BoxA"><h1>AIM Logic</h1></div>
        <div className="BoxB"><h1>VEY Formula</h1></div>
      </div>

      {/* Third row with DSCORE and DIP */}
      <div className="Engines1 pls center">
        <div className="DSCORE"><h1>DSCORE Index</h1></div>
        <div className="DIP"><h1>DIP Ecosystem</h1></div>
      </div>

      {/* Fourth row with BoxC and BoxD */}
      <div className="Engines2 pls center">
        <div className="BoxC"><h1>DSCORE Index</h1></div>
        <div className="BoxD"><h1>DIP Ecosystem</h1></div>
      </div>
    </div>
  );
}
