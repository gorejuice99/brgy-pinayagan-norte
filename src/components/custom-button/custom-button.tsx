import { Button } from 'react-bootstrap';

// Components
import SpinnerComponent from 'components/spinner';

// Types
import { ICustomButton } from 'types/custom-button';

// Styles
import styles from './custom-button.module.scss';

function CustomButton({
  isLoading,
  onclick = () => {},
  loadingLabel = 'Loading...',
  buttonType = 'submit',
  buttonLabel = 'Submit',
  buttonClassName,
}: ICustomButton) {
  return (
    <Button
      onClick={onclick}
      className={`${styles.customButton} ${buttonClassName}`}
      type={buttonType}
      disabled={isLoading}
    >
      {isLoading && (
        <SpinnerComponent
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
          className="mx-1"
        />
      )}
      {isLoading ? loadingLabel : buttonLabel}
    </Button>
  );
}

export default CustomButton;
