/* eslint-disable @next/next/no-img-element */
'use client';

import LOGO from '../../assets/logo/logo.svg';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { navigationItems } from './navConfig';
import { useRouter } from 'next/navigation';
import { FramerMotion } from '..';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useRouter();

    // nav handler
    const handleOnClickNavItem = (path: string) => {
        navigate.push(path);
        setMobileMenuOpen(false);
    };

    // handle mail us
    const handleMailUs = () => {
        if (typeof window !== 'undefined') {
            window.open('https://mail.google.com/mail/?view=cm&fs=1&to=dmelectricals8@gmail.com', '_blank');
        }
    };

    const DialogPanelContent = (
        <>
            <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5 border-red-100 rounded-lg p-2 border-2">
                    <span className="sr-only">Your Company</span>
                    <img className="h-8 w-auto" src={LOGO.src} alt="logo" />
                </a>
                <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => {
                        setMobileMenuOpen(false);
                    }}
                >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                        {navigationItems.map(({ name, path }) => (
                            <FramerMotion key={name}>
                                <div
                                    key={name}
                                    onClick={() => handleOnClickNavItem(path)}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                                >
                                    {name}
                                </div>
                            </FramerMotion>
                        ))}
                    </div>
                    <div className="py-6">
                        <div
                            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                            onClick={handleMailUs}
                        >
                            Mail us
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <header className="fixed backdrop-blur-lg inset-x-0 top-0 z-50">
            <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1  p-1">
                    <a href="/" className="-m-1.5 p-1.5 border-2 border-red-100 rounded-lg p-2">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src={LOGO.src} alt="logo" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigationItems.map(({ name, path }) => (
                        <FramerMotion key={name}>
                            <div
                                key={name}
                                onClick={() => handleOnClickNavItem(path)}
                                className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
                            >
                                {name}
                            </div>
                        </FramerMotion>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div
                        className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
                        onClick={handleMailUs}
                    >
                        Mail us <span aria-hidden="true">&rarr;</span>
                    </div>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <FramerMotion top={mobileMenuOpen} right={!mobileMenuOpen}>
                        {DialogPanelContent}
                    </FramerMotion>
                </DialogPanel>
            </Dialog>
        </header>
    );
};

export default Header;
