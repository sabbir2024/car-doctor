import { Link, NavLink } from "react-router-dom";
import Logo from "../../../components/Logo";
import Themes from "../../../components/theme/Themes";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const NavBar = () => {
    const { logOut, user } = useContext(AuthContext);

    const NavMenu =
        <>
            <li><NavLink to={'/'} activeClassName="text-accent" className="nav-link">Home</NavLink></li>
            {user && <li><NavLink to={'/myBookings'} activeClassName="text-accent" className="nav-link">My Bookings</NavLink></li>}
            <li><NavLink to={'/about'} activeClassName="text-accent" className="nav-link">About</NavLink></li>
            <li><NavLink to={'/services'} activeClassName="text-accent" className="nav-link">Services</NavLink></li>
            <li><NavLink to={'/blog'} activeClassName="text-accent" className="nav-link">Blog</NavLink></li>
            <li><NavLink to={'/contract'} activeClassName="text-accent" className="nav-link">Contact</NavLink></li>
        </>

    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 pb-9">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {NavMenu}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-xl"><Logo /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {NavMenu}
                    </ul>
                </div>
                <div className="navbar-end flex gap-3">
                    <Themes />
                    {
                        user ? <button className="btn btn-ghost btn-outline" onClick={() => logOut()}>Log out</button> : <Link to={'login'} className="btn btn-ghost btn-outline" >Log in</Link>
                    }
                    <a className="btn btn-outline btn-accent">Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
