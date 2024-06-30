import { TargetAndTransition } from 'framer-motion';
export type GridProps = {
    children: React.ReactNode;
    size: string;
};

export type FramerMotionProps = {
    children: React.ReactNode;
    left?: boolean;
    right?: boolean;
    top?: boolean;
    bottom?: boolean;
    delay?: number;
    customMoveX?: number;
    customMoveY?: number;
    duration?: number;
    nofade?: boolean;
    scale?: number[];
    whileHoverAnimation?: TargetAndTransition;
    rotate?: number[];
    rotateZ?: number;
};

export type ColorPolygonProps = { children: React.ReactNode };

export type CarouselProps = {
    slides: string[];
    slideDuration?: number;
};
