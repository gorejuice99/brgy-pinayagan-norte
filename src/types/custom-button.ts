export interface ICustomButton {
  isLoading: boolean;
  onclick?: () => void;
  loadingLabel?: string;
  buttonLabel?: string;
  buttonType?: 'submit' | 'button' | 'reset' | undefined;
  buttonClassName?: string;
}
