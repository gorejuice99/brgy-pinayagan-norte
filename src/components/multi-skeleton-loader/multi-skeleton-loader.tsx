// Components
import SkeletonLoader from 'components/skeleton-loader';

// Types
import { IMultiSkeletonLoader } from 'types/skeleton-loader';

function MultiSkeletonLoader({
  count,
  height,
  width = 100,
}: IMultiSkeletonLoader) {
  return (
    <>
      {new Array(count).fill(null).map((_, index) => (
        <div key={index} className="py-2">
          <SkeletonLoader height={height}>
            <rect
              x="0"
              y="0"
              rx="5"
              ry="5"
              width={`${width}%`}
              height={`${height}`}
            />
          </SkeletonLoader>
        </div>
      ))}
    </>
  );
}

export default MultiSkeletonLoader;
