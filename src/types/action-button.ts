export interface IActionButton {
  icon: 'add' | 'edit' | 'delete' | 'play' | 'stop';
  label: string;
  onclick?: () => void;
  buttonType?: 'submit' | 'button' | 'reset';
  cls?: string;
}
