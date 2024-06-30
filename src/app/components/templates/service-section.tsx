import Image from 'next/image';
import CUBE from '../../assets/icons/cube.svg';
import { FramerMotion } from '..';

const ServiceItem = (service: string, delay: number) => {
    return (
        <FramerMotion top delay={delay}>
            <div className="w-full flex flex-row gap-2 align-middle items-center0">
                <Image src={CUBE.src} alt="image" width={24} height={24} color="rgb(79, 70, 229)" />
                <p className="font-semibold  text-xl md:text-2xl leading-8 text-gray-600"> {service}</p>
            </div>
        </FramerMotion>
    );
};

const ServiceSection = () => {
    return (
        <div className="w-full flex flex-col gap-2 max-w-4xl m-auto pt-12" id="services">
            <div className="w-fit m-auto pb-12 ">
                <FramerMotion top>
                    <h1 className="text-3xl  font-bold tracking-tight  sm:text-6xl text-blue pt-12 md:pt-18 text-center pb-8">
                        Our Services
                    </h1>
                </FramerMotion>
                {ServiceItem('A/C & D/C motor rewinds', 0.5)}
                {ServiceItem('Generator rewinds', 0.75)}
                {ServiceItem('Repairs/overhauls', 1)}
                {ServiceItem('Transformer rewinds', 1.25)}
                {ServiceItem('Submersible pump rewinds', 1.5)}
            </div>
        </div>
    );
};

export default ServiceSection;
