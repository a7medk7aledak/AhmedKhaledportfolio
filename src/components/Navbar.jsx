import logo from "../assets/AhmedKhaled.png";
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <a href="#"><img className="mx=2 w-24" src={logo} alt="logo" /></a>
            </div>
            <div className="m-8 flex items-center just-center gap-4 text-xl">
                <a href="https://www.linkedin.com/in/%E2%80%AAahmed-khaled-a3852b21a/">
                    <FaLinkedin />
                </a>
                <a href="https://github.com/a7medk7aledak">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/a7med_k7aled_ak/">
                    <FaInstagram />
                </a>

                <a href="https://www.facebook.com/profile.php?id=100094109894916">
                    <FaFacebook />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
