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


import Header from './Main/Components/Header';
import Footer from './Main/Components/Footer';
import Checkout from './ShoppingCart/Checkout';
import ProductListing from './Catalog/Components/Electronics/ProductListing';
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
import MathEngine from './Catalog/Services/MathEngine';
import ProductServer from './Catalog/Services/ProductServer';
import  DisplayManager from './Catalog/Services/Inheritance';
 import InfiniteScroll from './Lazyloading/InfiniteScroll';
import PubScrbContainer from './Utils/Communication/PubSub';
//import Gallery from './Catalog/Components/Flowers/Gallery';
import Gallery from './Catalog/Components/Gallery/Gallery';
import ProductGallery from './Catalog/Components/Electronics/ProductGallery';
import ProductList from './Catalog/Components/Gallery/ProductList';
import RubberBand from './BI/Components/RubberBand';
import CounterC from './Catalog/Components/Gallery/Counterc';
 
import EnviornmentConsole from './Greenhouse/EnvironmentConsole';
import Parent from './Utils/Siblings/Parent';
import LazyLoader from './Lazyloading/LazyLoader';
 
function App() {
  
  const handleProductServer=()=>{
    // Math Engine : Using static methods
    //object orientation
    console.log(MathEngine.sum(30, 70)); // Output: 100
    console.log(MathEngine.square(4)); // Output: 16
    console.log(MathEngine.cube(2));   // Output: 8

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
    DisplayManager.show();
  }

  return (
    <div>
     
      {/*
      </div>
          {  <div class="container mt-5">
            <Router>
                <NavBar />
                <hr/>
                <AppRoutes />
            </Router>
          </div>  }
      
      */
      } 

    
      {/*<div>
      
              <MirrorTextboxes/> 
              <Container/>
              <ToolbarContainer/>
              <ImageButtonContainer/>
              <MembershipSelector/>
              <CategorySelector/>
              <AutoSuggestionContainer/>
              
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
           
              <BODDashboard/>
              <MarketingDashboard/>
              <CustomerDashboard/>
              <ShipmentDashboardContainer/>

              <BarChart/>
              

              
              
              <Loginc/>
              <UncontrolledForm/>
              <ControlledForm/>  
              <LifeCycle/>
              <LifeCycleHook/>
              <Gallery/>
              <ProductList/>
              <PubScrbContainer/>
              <Parent/>
              <CartContainer/>
              <Checkout/>
              <UserProfile / >
                <InfiniteScroll/>
                <LazyLoader/>


              <Graphics/>
              <Keyboard/>
              <Mouse/>
              <RubberBand/>
                           
              <Container/>
              <TabContainer/>
              <ToolbarContainer/>
              <ImageButtonContainer/>
              <MembershipSelector/>
              <CategorySelector/>
               <CounterJ/>
              <EnviornmentConsole/>
               <button onClick={handleProductServer}>Product Server CRUD</button>

           
      */}
    

        <ProductListing/>

     </div>
         
 
  );
}

export default App;