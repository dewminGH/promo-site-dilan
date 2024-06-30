import Image from 'next/image';
import PHONE from '../../assets/icons/phone.svg';
import MAIL from '../../assets/icons/mail.svg';

const Footer = () => {
    const date = new Date();
    return (
        <footer className="bg-white shadow  dark:bg-gray-800  bottom-0 mt-12 md:mt-8" id="/#contact-us">
            <div className="w-full mx-auto  p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © {date.getFullYear()}
                    <span>Dlian Moters™</span>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <div className="flex flex-col gap-2">
                            <div className="mb-2">
                                <span className="me-4 md:me-6">Contact Us</span>
                            </div>
                            <div className="flex gap-2 content-center">
                                <Image src={PHONE.src} width={16} height={16} alt="phone" />
                                +94 xxx xxx xx
                            </div>

                            <div className="flex gap-2 content-center">
                                <Image src={MAIL.src} width={16} height={16} alt="phone" /> exapmle@.com
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
