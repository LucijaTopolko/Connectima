import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {

   const navigate = useNavigate();

   sessionStorage.removeItem('accessToken');

   useEffect(() => {
      navigate('/login');
      window.location.reload();
   }, [])

   return (
      <></>
   );
}

export default Logout;