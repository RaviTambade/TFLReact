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
import CartContainer from './ShoppingCart/Context/CartContainer';
import MemoryRouteContainer from './Routes/MemoryRouter/MemoryRouterContainer';
import FragmentContainer from './Catalog/Components/Fragments/FragmentContainer';
import BODDashboard from './BI/Components/BOD/BODDashboard';
import Dashboard from './BI/Components/BOD/Dashboard';
import MarketingDashboard from './BI/Components/Marketing/MKTDashboard';
import CustomerDashboard from './BI/Components/Customer/CustomerDashboard';
import ShipmentDashboardContainer from './BI/Components/Shipper/ShipmentContainer';
import BarChart from './Utils/Charts/BarChart';
import Graphics from './BI/Components/Graphics';
import Keyboard from './BI/Components/KeyboardEvent';
import Mouse from './BI/Components/MouseEvent';
import ControlledForm from './Membership/Components/ControlledForm';
import UncontrolledForm from './Membership/Components/UnControlledForm';
import TabContainer from './Utils/Tabs/TabContainer';
import Loginc from './Membership/Components/Loginc';
import LifeCycle from './Utils/LifeCycle';
import LifeCycleHook from './Utils/LifeCycleHook';
import ProductServer from './Catalog/Services/ProductServer';
function App() {
  
  const handleProductServer=()=>{
    const server = new ProductServer();
  
    server.createProduct({ id: 1, name: 'Laptop', price: 1200 });
    server.createProduct({ id: 2, name: 'Smartphone', price: 800 });
  
    // Reading products
    server.getProductById(1);
  
    // Updating a product
    server.updateProduct(1, { price: 1100 });
  
    // Deleting a product
    server.deleteProduct(2);
  
    // Static method usage
    console.log(ProductServer.getServerInfo());
  }

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

               <ProductGallery/>
              <Checkout/>
                <CartContainer/>
              
                <MemoryRouteContainer/>
              <FragmentContainer/>
              <  
       <BODDashboard/>
       
       <MarketingDashboard/>
              <CustomerDashboard/>

          <ShipmentDashboardContainer/>

          <BarChart/>
            <Graphics/>
                <Keyboard/>
                  <Mouse/>


                  <UncontrolledForm/>
                  <ControlledForm/>
                  <TabContainer/>
                      <Loginc/>
                 
                    
                  <LifeCycle/>


       */}
         <LifeCycleHook/>
    
        <button onClick={handleProductServer}>Product Server CRUD</button>


     </div>
</div>
  );
}

export default App;