'use client';

import Image from 'next/image';
import { FramerMotion, TailGrid } from '../components';
import { GALLERY_IMAGE_LIST } from './item-list';

const GRID_ITEM_LIST = GALLERY_IMAGE_LIST.map((image, _index) => (
    <div key={_index}>
        <FramerMotion duration={0.35}>
            <Image
                src={image}
                alt="image"
                width={1000}
                height={300}
                className="cursor-pointer h-grid-image-sm md:h-grid-image-md lg:h-grid-image-lg rounded-md"
                // style={{ maxHeight: 400, height: 400 }}
            />
        </FramerMotion>
    </div>
));

const Gallery = () => {
    return (
        <div>
            <div className="flex  flex-col justify-center items-center">
                <FramerMotion top>
                    <div className=" max-w-4xl">
                        <h1 className="mt-11 mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center text-blue">
                            Our Craftsmanship in Action
                        </h1>
                    </div>
                </FramerMotion>
                <FramerMotion top delay={0.5}>
                    <div className=" max-w-3xl">
                        <p className="mt-6 mb-16 text-lg leading-8 text-gray-600 max-w-4xl text-center">
                            We pride ourselves on delivering unparalleled precision and dedication in motor rewinding.
                            With years of experience and a commitment to excellence, we ensure that every motor we
                            rewind performs at its best.
                        </p>
                    </div>
                </FramerMotion>
            </div>

            <TailGrid size={'2'}>{GRID_ITEM_LIST}</TailGrid>
        </div>
    );
};

export default Gallery;
