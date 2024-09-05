import config from './config';

const Soc = () => {
  
    return (
      <div>
        <h1>API URL: {config.API_URL}</h1>
        <h1>API APP KEY: {config.REACT_APP_API_KEY}</h1>
      </div>
    );
  };
  
  export default Soc;