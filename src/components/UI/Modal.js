import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

// Images
import meal1 from '../../images/meals/meal 1.jpg';

const Backdrop = (props) => <div className='backdrop' onClick={props.close} />;

const ModalContent = (props) => (
  <div className='modal'>
    <button className='close' onClick={props.close}>
      &times;
    </button>
    <h2 className='modal-heading'>Get your first meal for free</h2>

    <form className='modal-form'>
      <label>First Name</label>
      <input type='text' placeholder='Your First Name' />
      <label>Last Name</label>
      <input type='text' placeholder='Your Last Name' />
      <label>Email Address</label>
      <input type='email' placeholder='Your E-mail' />
      <button className='btn' type='button'>
        Next step &rarr;
      </button>
    </form>
  </div>
);

const Deatils = () => (
  <div className='details'>
    <img src={meal1} alt='Meal 1' />
  </div>
);

const portalEl = document.querySelector('#overlays');

const Modal = (props) => {
  if (props.details)
    return (
      <Fragment>
        {ReactDOM.createPortal(<Backdrop close={props.close} />, portalEl)}
        {ReactDOM.createPortal(<Deatils close={props.close} />, portalEl)}
      </Fragment>
    );
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop close={props.close} />, portalEl)}
      {ReactDOM.createPortal(<ModalContent close={props.close} />, portalEl)}
    </Fragment>
  );
};

export default Modal;
