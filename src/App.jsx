import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/pages/LoginPage';
import SignUp from './components/pages/signup';  
import AddCustomerForm from './components/pages/AddCustomerForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-customer" element={<AddCustomerForm />} /> {/* Added this */}
      </Routes>
    </Router>
  );
}

export default App;
