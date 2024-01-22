import { ReactNode } from 'react';

export interface ISkeletonLoaderProps {
  children: ReactNode;
  height: number;
  width?: string | number;
}

export interface IMultiSkeletonLoader {
  count: number;
  height: number;
  width?: number;
}
