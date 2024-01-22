import { ReactComponent as TrashIcon } from 'assets/icons/trash.svg';
import { ReactComponent as PlusIcon } from 'assets/icons/plus.svg';
import { ReactComponent as EditIcon } from 'assets/icons/pen-to-square.svg';
import { ReactComponent as PlayIcon } from 'assets/icons/play-light.svg';
import { ReactComponent as StopIcon } from 'assets/icons/stop-light.svg';

// Types
import { IActionButton } from 'types/action-button';

// Styles
import styles from './action-button.module.scss';

function ActionButton({
  icon,
  label,
  buttonType = 'submit',
  cls = '',
  onclick = () => {},
}: IActionButton) {
  const iconObj = {
    add: <PlusIcon />,
    edit: <EditIcon />,
    delete: <TrashIcon />,
    play: <PlayIcon />,
    stop: <StopIcon />,
  };

  return (
    <button
      onClick={() => onclick()}
      type={buttonType}
      className={`${styles.actionButton} ${cls}`}
    >
      {iconObj[icon]} {label}
    </button>
  );
}

export default ActionButton;
