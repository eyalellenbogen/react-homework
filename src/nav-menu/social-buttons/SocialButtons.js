import React from 'react';
import './SocialButtons.scss'

function SocialButtons() {
    return (
        <div className='social-buttons mb-4'>
            <ul className='d-flex flex-row w-100'>
                <li className='mr-3'>
                    <a href='https://www.facebook.com/eyal453' rel="noopener noreferrer" target='_blank'>
                        <i className='fab fa-facebook'></i>
                    </a>
                </li>
                <li className='mr-3'>
                    <a href='https://twitter.com/eyalel' rel="noopener noreferrer" target='_blank'>
                        <i className='fab fa-twitter'></i>
                    </a>
                </li>
                <li className='mr-3'>
                    <a href='https://www.linkedin.com/in/eyalellenbogen/' rel="noopener noreferrer" target='_blank'>
                        <i className='fab fa-linkedin'></i>
                    </a>
                </li>
                <li>
                    <a href='https://www.instagram.com/eyalellenbogen/' rel="noopener noreferrer" target='_blank'>
                        <i className='fab fa-instagram'></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default SocialButtons;