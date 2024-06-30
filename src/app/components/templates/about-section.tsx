import { FramerMotion } from '..';

const About = () => {
    return (
        <div className="w-full flex flex-col gap-2 max-w-4xl m-auto pt-12" id="about">
            <div className="w-fit m-auto">
                <FramerMotion top>
                    <h1 className="text-3xl  font-bold tracking-tight  sm:text-6xl text-blue pt-12 md:pt-18 text-center pb-8">
                        About Us
                    </h1>
                </FramerMotion>
                <FramerMotion top delay={0.5}>
                    <p className="pt-7 text-base md:text-lg leading-8 text-gray-600 text-left">
                        DM Electricals is one of the leading Electrical Motor &amp; generator Rewinding, Repairing &amp;
                        Overhauling service providing workshop located in Battaramulla, Sri Lanka. We are specialists in
                        electric motor and generator repairing and rewinding. We have many years of experience in all
                        aspects of electrical windings from small Solenoid coils, DC drive motors and pumps to large AC
                        Motors, both Single Phase motors and 3 Phase motors. Our range of products include all aspects
                        of A/C &amp; D/C motors, pumps, alternators and generators. We rewind and repair products as
                        diverse as winch motors, treadmill motors, wound rotor motors, hydraulic pump motors, Industrial
                        Food Mixers and Ventilation fans &amp; blowers etc. At DM Electricals, we place our
                        responsibilities at the highest level when it comes to servicing our valued clientele. We are
                        committed to providing our clients a best service which fully conform with their requirements.
                        We further assure that your business, be it large or small, will always be highly regarded.
                    </p>
                </FramerMotion>
            </div>
        </div>
    );
};

export default About;
