import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
	return (
		<div>
			{/* Hero Section Banner */}
			<div className='Hero mt6'>
				
				{/* Main block combining the yellow accent bar and the copy blocks */}
				<div className='hero-content-wrapper'>
					<span className='vertical-line'></span>
					
					<div className='heading-text-group'>
						<h1 className='S1 pls-700 pt4 pb4'>Making products and intelligence for documents</h1>
						<h3 className='S2 pls-700 pb4'> Building infrastruture for Document Ecosystem</h3>
					</div>
				</div>

				{/* Buttons Block */}
				<div className='buttons-pc center'>
					<Link to='/product' className='Define pls'>
						See our Products
					</Link>
					<Link to='/service' className='VEY-button pls'>
						Get a Service
					</Link>
				</div>
			</div>
		</div>
	)
}
