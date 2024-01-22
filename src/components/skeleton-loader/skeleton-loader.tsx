import ContentLoader from 'react-content-loader';

// Types
import { ISkeletonLoaderProps } from 'types/skeleton-loader';

const SkeletonLoader = ({
  children,
  height,
  width = '100%',
}: ISkeletonLoaderProps) => (
  <ContentLoader
    style={{
      width: `${typeof width === 'string' ? width : `${width}px`}`,
      height: `${height}px`,
    }}
    backgroundColor="#d9d9d9"
    foregroundColor="#ededed"
    speed={2}
  >
    {children}
  </ContentLoader>
);

export default SkeletonLoader;
