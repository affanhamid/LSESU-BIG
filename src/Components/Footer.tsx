import Logo from "./Logo";
import Socials from "./Socials";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="bg-background text-fontColor py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4"><Logo /></h3>
                    <p>Empowering the next generation of leaders.</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="flex flex-col gap-2">
                        <li><Link href="/" className="hover:underline">Home</Link></li>
                        <li><Link href="/about" className="hover:underline">About Us</Link></li>
                        <li><Link href="/events" className="hover:underline">Events</Link></li>
                        <li><Link href="/resources" className="hover:underline">Resources</Link></li>
                        <li><Link href="/membership" className="hover:underline">Membership</Link></li>
                    </ul>
                </div>
                <div>

                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <div className="mb-5">
                        <p>LSE Student Union</p>
                        <p>Houghton Street</p>
                        <p>London</p>
                        <p>WC2A 2AE</p>
                    </div>
                    <p>Email: contact@lsebig.com</p>
                    <p>Phone: +44 123 456 7890</p>
                    <Socials />
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                <p>&copy; 2024 LSE BIG. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
