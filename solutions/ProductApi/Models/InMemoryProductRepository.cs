// Models/InMemoryProductRepository.cs
using ProductApi.Entities;
namespace ProductApi.Models
{
    public static class InMemoryProductRepository
    {
        private static readonly List<Product> Products = new()
        {
            new Product { Id = 1, Title = "Orchid", Description="Wedding Flower", UnitPrice= 9.99M, Quantity=6700, Likes=3487 },
            new Product { Id = 2, Title = "Gerbera", Description="Valentine Flower", UnitPrice= 12.99M, Quantity=3400, Likes=8745 },
            new Product { Id = 3, Title = "Lotus", Description="Worship Flower", UnitPrice= 22.99M, Quantity=7600, Likes=4656 },
            new Product { Id = 4, Title = "Jasmine", Description="Fregrance Flower", UnitPrice=2M, Quantity=5676, Likes=6500 },
            new Product { Id = 5, Title = "Tulip", Description="Delicate Flower", UnitPrice= 15M, Quantity=4534, Likes=2300 },
            new Product { Id = 6, Title = "Marigold", Description="Festival Flower", UnitPrice= 5.99M, Quantity=765, Likes=5600 }
        };

        public static IEnumerable<Product> GetAll() => Products;

        public static Product GetById(int id) => Products.FirstOrDefault(p => p.Id == id);

        public static void Add(Product product)
        {
            product.Id = Products.Max(p => p.Id) + 1;
            Products.Add(product);
        }

        public static void Update(Product product)
        {
            var index = Products.FindIndex(p => p.Id == product.Id);
            if (index != -1)
            {
                Products[index] = product;
            }
        }

        public static void Delete(int id)
        {
            var index = Products.FindIndex(p => p.Id == id);
            if (index != -1)
            {
                Products.RemoveAt(index);
            }
        }
    }
}
