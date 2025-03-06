import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Dashboard = () => {
  const { user } = useContext(AppContext);

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? <p>Welcome, {user.name}!</p> : <p>Please log in.</p>}
    </div>
  );
};

export default Dashboard;
