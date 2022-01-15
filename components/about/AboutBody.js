import React from 'react'
import Container from '../Container'

const AboutBody = () => {
    return (
        <>
            <section className="p_about_body_info">
                <Container>
                    <div className='p_about_info_card'>
                        {/* Left Side */}
                        <div className='p_card__left'>
                            <h4 className='p_heading_2'>Background</h4>
                        </div>

                        {/* Right Side */}
                        <div className='p_card_right'>
                            <p className='p_body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                    </div>

                    <div className='p_about_info_card'>
                        {/* Left Side */}
                        <div className='p_card__left'>
                            <h4 className='p_heading_2'>Skills</h4>
                        </div>

                        {/* Right Side */}
                        <div className='p_card_right'>
                            <p className='p_body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <p className='p_body'>UI/UX - HTML5 - CSS3 - Javascript - PHP - MySQL - Node.js - React.js - Next.js - MondoDB - GSAP - Strapi - GraphQL - Wordpress - etc.</p>    
                        </div>
                    </div>

                    <div className='p_about_info_card'>
                        {/* Left Side */}
                        <div className='p_card__left'>
                            <h4 className='p_heading_2'>Experiences</h4>
                        </div>

                        {/* Right Side */}
                        <div className='p_card_right'>
                            <p className='p_body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                        </div>
                    </div>
                    
                    <div className='p_about_info_card'>
                        {/* Left Side */}
                        <div className='p_card__left'>
                            <h4 className='p_heading_2'>Work</h4>
                        </div>

                        {/* Right Side */}
                        <div className='p_card_right'>
                            <table className='p_table'>
                                <tbody>
                                    <tr>
                                        <td className="__left">
                                            <p className="p_body">Front-end Designer & Developer</p>
                                        </td>
                                        <td className="__center">
                                            <p className="p_body">Freelancerlabbd</p>
                                        </td>
                                        <td className="__right">
                                            <p className="p_body">200 - Current</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="__left">
                                            <p className="p_body">Front-end Designer & Developer</p>
                                        </td>
                                        <td className="__center">
                                            <p className="p_body">Freelancerlabbd</p>
                                        </td>
                                        <td className="__right">
                                            <p className="p_body">2019 - 2020</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="__left">
                                            <p className="p_body">Front-end Designer & Developer</p>
                                        </td>
                                        <td className="__center">
                                            <p className="p_body">Freelancerlabbd</p>
                                        </td>
                                        <td className="__right">
                                            <p className="p_body">2018 - Current</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    
                    <div className='p_about_info_card'>
                        {/* Left Side */}
                        <div className='p_card__left'>
                            <h4 className='p_heading_2'>Education & Certification</h4>
                        </div>

                        {/* Right Side */}
                        <div className='p_card_right'>
                            <table className='p_table'>
                                <tbody>
                                    <tr>
                                        <td className="__left">
                                            <p className="p_body">Complete Web Development</p>
                                        </td>
                                        <td className="__center">
                                            <p className="p_body">Programming Hero</p>
                                        </td>
                                        <td className="__right">
                                            <p className="p_body">2021</p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="__left">
                                            <p className="p_body">Computer Science & Engineering</p>
                                        </td>
                                        <td className="__center">
                                            <p className="p_body">Leadign University</p>
                                        </td>
                                        <td className="__right">
                                            <p className="p_body">2021 - Current</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="__left">
                                            <p className="p_body">System Design</p>
                                        </td>
                                        <td className="__center">
                                            <p className="p_body">Algo Expert</p>
                                        </td>
                                        <td className="__right">
                                            <p className="p_body">2022</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default AboutBody
