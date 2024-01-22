import { Dispatch, SetStateAction } from 'react';

// Types
import { ETheme } from 'types/common';

export type TTheme = ETheme.LIGHT | ETheme.DARK;

export interface IThemeContext {
  theme: TTheme;
  toggleTheme: Dispatch<SetStateAction<TTheme>>;
}
