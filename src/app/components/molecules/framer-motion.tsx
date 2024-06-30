'use client';

import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { FramerMotionProps } from './type';

const FramerMotionAnimate: React.FC<FramerMotionProps> = ({
    children,
    top,
    bottom,
    left,
    right,
    delay,
    customMoveX,
    customMoveY,
    duration,
    nofade,
    scale,
    whileHoverAnimation,
    rotate,
    rotateZ,
}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    useEffect(() => {
        if (inView) {
            void controls.start('visible');
        } else {
            void controls.start('hidden');
        }
    }, [controls, inView]);

    // fade config
    const moveY = top ? [customMoveY ?? 30, 0] : bottom ? [customMoveY ? -customMoveY : -30, 0] : undefined;
    const moveX = right ? [customMoveX ?? 30, 0] : left ? [customMoveX ? -customMoveX : -30, 0] : undefined;
    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={{ ...controls }}
                variants={{
                    hidden: { opacity: nofade ? 1 : 0 },
                    visible: {
                        opacity: nofade ? 1 : [0, 0.75, 1],
                        y: moveY,
                        x: moveX,
                        scale,
                        rotate,
                        rotateZ,
                    },
                }}
                whileHover={whileHoverAnimation}
                transition={{ ease: 'easeOut', duration: duration ?? 0.5, delay }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default FramerMotionAnimate;
