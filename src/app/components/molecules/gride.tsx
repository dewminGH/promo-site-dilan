import { GridProps } from './type';

const TailGrid: React.FC<GridProps> = ({ size, children }) => {
    const gridSize = () => {
        switch (size) {
            case '1':
                return `grid-cols-1`;
            case '2':
                return `grid-cols-2`;
            case '3':
                return `grid-cols-3`;
            case '4':
                return `grid-cols-4`;
            case '5':
                return `grid-cols-5`;
            default:
                return 'grid-cols-6';
        }
    };

    return <div className={`grid ${gridSize()} gap-4`}>{children}</div>;
};

export default TailGrid;
