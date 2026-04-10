 
namespace ProductApi.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal UnitPrice{get;set;}
        public int Quantity {get; set;}
        public int Likes {get;set;}
        public string ImageUrl{get;set;}
    }
}
