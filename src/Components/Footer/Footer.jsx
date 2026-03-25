import './Footer.css'
import pattern from './pattern.svg'

export default function Footer() {
	return (
		<div className='Footer'>
			<div className='Footer-Left'>
				<img src={pattern} alt="pattern" className='pattern'/>
				<p className='pls-600 FTaglineC'>Grow Clarity</p>
			</div>
			<div className='Footer-Links-Div pls-600'>
				<ul className='Footer-Links'>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/Home'>Home</a></li>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/About'>About</a></li>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/Team'>Team</a></li>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/Partner'>Partner</a></li>
				</ul>
				<ul className='Footer-Links'>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/Platform'>Platform</a></li>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/Service'>Service</a></li>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/Product'>Product</a></li>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/Market'>Market</a></li>
				</ul>
				<ul className='Footer-Links'>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/AIM'>AIM</a></li>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/DScore'>DScore</a></li>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/Login'>Login</a></li>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/Contact'>Contact</a></li>
				</ul>
				<ul className='Footer-Links'>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/Case%20Studies'>Case Studies</a></li>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/Terms-of-Use'>Terms of Use</a></li>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/Company%20Rights'>Company Rights</a></li>
					<li><a className='Footer-Links-Tag' href='https://hugecompany.in/Privacy%20Statement'>Privacy Statement</a></li>
				</ul>
			</div>
		</div>
	)
}
