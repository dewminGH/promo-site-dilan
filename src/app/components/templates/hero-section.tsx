/* eslint-disable @next/next/no-img-element */

import { Carousel, FramerMotion } from '..';
import WORK_1 from '../../assets/gallery/work_1.jpeg';
import WORK_3 from '../../assets/gallery/work_3.jpeg';
import WORK_4 from '../../assets/gallery/work_4.jpeg';
import WORK_11 from '../../assets/gallery/work_11.jpeg';
import WORK_13 from '../../assets/gallery/work_13.jpeg';

const HeroSection = () => {
    return (
        <div className="mx-auto  py-6 sm:py-12 flex flex-col items-center">
            <Carousel slides={[WORK_1.src, WORK_3.src, WORK_4.src, WORK_11.src, WORK_13.src]} slideDuration={6500} />
            <div className="max-w-4xl">
                <FramerMotion top>
                    <div className="hidden sm:mb-8 sm:flex sm:justify-center pt-6">
                        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            <a href="#" className="font-semibold text-indigo-600 ml-1">
                                <span className="absolute inset-0" aria-hidden="true" />
                                Find US ON GOOGLE MAPS
                                <span aria-hidden="true" className="ml-1">
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </div>
                </FramerMotion>
                <div className="text-center">
                    <FramerMotion top>
                        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight  sm:text-6xl text-blue mt-12 md:mt-18">
                            Leading Specialists in Electrical Motors and Generators Repair and Rewinding
                        </h1>
                    </FramerMotion>
                    <FramerMotion top delay={0.5}>
                        <p className="mt-7 text-base md:text-lg leading-8 text-gray-600 text-left">
                            DM Electricals is Colombo’s leading electric motor/Generator repair &amp; rewinding
                            specialist, providing a comprehensive range of cost-effective services for electric motor
                            rewinding and overhauls. With extensive experience and up-to-date technical knowledge, the
                            team at DM electricals can handle a wide range of rotating machines, including single and
                            3-phase AC motors, DC motors, crane and hoist motors, and more. The workshop caters to all
                            electric motor repair /Rewinding needs from 75 Watts to 800 kW, servicing and repairing all
                            electric motor/generator brands, including ABB, Toshiba, Teco, WEG, Stamford, Denyo, Air Man
                            and more.
                        </p>
                    </FramerMotion>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
