import { ReactNode } from 'react';

/* eslint-disable no-unused-vars */
export enum ETheme {
  LIGHT = 'light',
  DARK = 'dark',
}

export enum ESkillType {
  SOFT = 'Soft',
  TECHNICAL = 'Technical',
  FUNCTIONAL = 'Functional',
}

export type TProviderProps = { children: ReactNode };
