import { NavLink } from "react-router-dom"
import './header.css'

export const Header = () => {
    return (
        <>
            <div className="header">
                <header id="site_header" className="header-content clearfix">
                    <div className="header-content clearfix">
                        {/* Text Logo */}
                        <div className="text-logo">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                <div className="logo-symbol">J</div>
                                <div className="logo-text">JMaria <span>- devScrooge</span></div>
                            </NavLink>
                        </div>


                        {/* Navigation */}
                        <div className="site-nav mobile-menu-hide">
                            <ul className="leven-classNameic-menu site-main-menu">
                                <li className="menu-item">
                                    <NavLink
                                        to="/"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        Home
                                    </NavLink>
                                </li>

                                <li className="menu-item">
                                    <NavLink
                                        to="/services"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        Services
                                    </NavLink>
                                </li>

                                <li className="menu-item">
                                    <NavLink
                                        to="/contact"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "active" : ""
                                        }
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        {/* Mobile Menu */}
                        <a className="menu-toggle mobile-visible">
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                </header>
            </div>
        </>
    )
}
