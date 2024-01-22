import Spinner from 'react-bootstrap/Spinner';

const SpinnerComponent = (props: any) => {
  return <Spinner {...props}>{props.children}</Spinner>;
};

export default SpinnerComponent;
