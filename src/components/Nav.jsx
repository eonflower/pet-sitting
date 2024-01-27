import React from 'react'
import { useState } from 'react'
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars as menubar } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen)
	}

	return (
		<div className='nav'>
			<button className='nav-button' onClick={toggleModal}>
				<FontAwesomeIcon icon={menubar}/>
			</button>
			{isModalOpen && (
				<div className='nav-modal'>
					<div className='nav-modal-content'>
						<ul>
							<li>
							<Link to='/' onClick={toggleModal}>
							Home
						</Link>
							</li>
							<li>
							<Link to='/about' onClick={toggleModal}>
							About
						</Link>
							</li>
							<li>
							<Link to='/rates' onClick={toggleModal}>
							Rates
						</Link>
							</li>
							<li>
							<Link className='contact-link' to='/contact' onClick={toggleModal}>
							Contact
						</Link>
							</li>
						</ul>
					</div>
				</div>
			)}
		</div>
	)
}
