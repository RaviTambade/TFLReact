import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './Main/Components/NavBar';
import AppRoutes from './Routes/Routes';
import MirrorTextboxes from './Utils/Mirror';
import Container from './Utils/Container';
import ToolbarContainer from './Utils/ToolbarContainer';
import ImageButtonContainer from './Utils/ImageButtonContainer';
import AutoSuggestionContainer from './Utils/AutoSuggestionContainer';
import CategorySelector from './Utils/CategorySelector';
import MembershipSelector from './Utils/MembershipSelector';
import UserProfile from './CRM/Compnents/UserProfile';
import OrderConfirmationContainer from './OrderProcessing/OrderConfirmationContainer';
import ProductReviewsContainer from './BI/Components/ProductReviews';
import Carousel from './Main/Components/Carousel';
import AddressForm from './Shipping/AddressForm';
import ProductGallery from './Catalog/Components/ProductGallery';
import Header from './Main/Components/Header';
import Footer from './Main/Components/Footer';
import Checkout from './ShoppingCart/Checkout';
import ProductListing from './Catalog/Components/ProductListing';
function App() {
  return (
    <div>
    <div class="container-fluid p-5 bg-primary text-white text-center">
      <h1>Transflower</h1>
    </div>
      {/* <div class="container mt-5">
        <Router>
            <NavBar />
            <hr/>
            <AppRoutes />
        </Router>
      </div> */}

      <div>
       {/*  <MirrorTextboxes/> 
            <Container/>
            <ToolbarContainer/>
            <ImageButtonContainer/>
            <MembershipSelector/>
            <CategorySelector/>
            <AutoSuggestionContainer/>
            <UserProfile / >
            <OrderConfirmationContainer/>
             <ProductReviewsContainer></ProductReviewsContainer>
             <Carousel/>
             <<AddressForm/>/>


              <Router>
              <Header/>
              <ProductGallery/>
              <Footer/>
              </Router>

              <Checkout/>

       */}
     
      

     <ProductGallery/>
      </div>
</div>
  );
}

export default App;