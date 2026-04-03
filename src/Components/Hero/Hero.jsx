import './Hero.css'

export default function Hero() {
	return (
		<div>
			{/* Top Tagline */}
			<div className='TaglineP'>
				<p className='pls-800 TaglineC fs-72'>Grow Huge</p>
			</div>

			{/* Hero Section */}
			<div className='Hero'>
				<h1 className='S1 pls-700'>Bharat's Clarity Company.</h1>
				<h3 className='S2 pls-700'>Define, Verify, Decide — with Confidence</h3>
				<h5 className='S3 pls-700'>“100% document clarity across 100+ departments.”</h5>

				{/* Paragraph */}
				<div className="P-box">
					<p className="P1 pls-200">
						Huge Company brings clarity to documents by clearly defining their name, purpose, issuer, and owner — helping people and businesses make confident decisions.
					</p>
				</div>

				{/* Buttons */}
				<div className='buttons-pc center'>
					<button 
						onClick={() => window.location.href='#'} 
						className='Define pls'>
						Define My Document
					</button>
					<button 
						onClick={() => window.location.href='#'} 
						className='VEY-button pls'>
						Verify Everything Yourself
					</button>
				</div>
			</div>

			{/* Letter Bar */}
			<div className='Letter pls-500'>
			  <div className="letter-left">
			    From the Founders Desk — <span className="letter-title BC-DBlue">The Huge Letter</span>
			  </div>
			  <div className="letter-right">
			    <a href="#" className="read-now">Read Now</a>
			  </div>
			</div>
		</div>
	)
}
