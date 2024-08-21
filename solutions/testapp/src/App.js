import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './Main/Components/NavBar';
import AppRoutes from './Routes/Routes';

function App() {
  return (
    <div>
    <div class="container-fluid p-5 bg-primary text-white text-center">
      <h1>Transflower</h1>
    </div>
    <div class="container mt-5">
      <Router>
          <NavBar />
          <hr/>
          <AppRoutes />
      </Router>
    </div>
</div>
  );
}

export default App;