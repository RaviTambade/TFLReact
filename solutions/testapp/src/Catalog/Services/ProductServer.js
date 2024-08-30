class ProductServer {
  
    constructor() {
      // Initialize with an empty product list
      this.products = [];
      console.log('ProductServer: Initialized');
    }
  
    // Static method to get a description of the server
    static getServerInfo() {
      return 'ProductServer v1.0';
    }
  
    // Create a new product
    createProduct(product) {
      // Ensure the product has an id
      if (!product.id) {
        throw new Error('Product must have an id');
      }
      // Add the product to the products array
      this.products.push(product);
      console.log(`Product Created: ${JSON.stringify(product)}`);
    }
  
    // Read a product by id
    getProductById(productId) {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        console.log(`Product Retrieved: ${JSON.stringify(product)}`);
        return product;
      } else {
        console.log(`Product not found with id: ${productId}`);
        return null;
      }
    }
  
    // Update a product by id
    updateProduct(productId, updatedData) {
      const productIndex = this.products.findIndex(p => p.id === productId);
      if (productIndex === -1) {
        console.log(`Product not found with id: ${productId}`);
        return null;
      }
      // Update the product with new data
      this.products[productIndex] = { ...this.products[productIndex], ...updatedData };
      console.log(`Product Updated: ${JSON.stringify(this.products[productIndex])}`);
      return this.products[productIndex];
    }
  
    // Delete a product by id
    deleteProduct(productId) {
      const productIndex = this.products.findIndex(p => p.id === productId);
      if (productIndex === -1) {
        console.log(`Product not found with id: ${productId}`);
        return null;
      }
      // Remove the product from the array
      const deletedProduct = this.products.splice(productIndex, 1)[0];
      console.log(`Product Deleted: ${JSON.stringify(deletedProduct)}`);
      return deletedProduct;
    }
  }
  

  export default ProductServer;
  
  