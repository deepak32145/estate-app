import {useContext} from 'react';
import { AuthContext } from '../../context/AuthContext';
import './homePage.scss';

const HomePage = () => {
  const {currentUser} = useContext(AuthContext);
  console.log("Current User: ", currentUser);
  return (
    <div>homePage</div>
  )
}

export default HomePage