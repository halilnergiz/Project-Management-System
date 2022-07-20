/* eslint-disable linebreak-style */
// import React from 'react';
// import {toast,ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import styled from 'styled-components';
// import {Submit} from '../../UI/atoms/Buttons';

// const ControlBtn = styled(Submit)``;

// const Notification = ({store}) => {
    
//   const notify = () => {
//     setTimeout(() => {
//       toast.error(store.loginInfMessage), {
//         position: 'top-left',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: false,
//         progress: undefined,
//       };
//       toast.success(store.loginInfMessage), {
//         position: 'top-left',
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: false,
//         progress: undefined,
//       };
//     }, 200);
//   };
//   return (
//     <>
//       {console.log(store.loginInfMessage)}
//       <ToastContainer/>
//       <ControlBtn onClick={notify} type={'submit'}/>;
//     </>
//   );
// };

// export default Notification;

export const toastProperty = {
  position: 'top-left',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  progress: undefined,
};
