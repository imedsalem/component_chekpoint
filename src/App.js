import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto/ProfilePhoto';
import FullName from './Component/Profile/FullName/FullName';
import Address from './Component/Profile/Address/Address'

function App() {
  return (
    <div className='container'>
      <div className="card">
        <ProfilePhoto />
        <FullName />
        <Address />
      </div>
    </div>
  );
}

export default App;
