using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;



using ProductApi.Entities;
using ProductApi.Models;
var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});



// Add JWT authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Issuer"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
});

builder.Services.AddAuthorization();



var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.UseAuthentication();
app.UseAuthorization();






// Use CORS policy
app.UseCors("AllowAllOrigins");


app.MapGet("/products", () =>
{
    var products = InMemoryProductRepository.GetAll();
    return Results.Ok(products);
});

app.MapGet("/products/{id}", (int id) =>
{
    var product = InMemoryProductRepository.GetById(id);
    return product is not null ? Results.Ok(product) : Results.NotFound();
});

app.MapPost("/products", (Product product) =>
{
    InMemoryProductRepository.Add(product);
    return Results.Created($"/products/{product.Id}", product);
});

app.MapPut("/products/{id}", (int id, Product updatedProduct) =>
{
    var existingProduct = InMemoryProductRepository.GetById(id);
    if (existingProduct is null) return Results.NotFound();

    updatedProduct.Id = id;
    InMemoryProductRepository.Update(updatedProduct);
    return Results.Ok(updatedProduct);
});

app.MapDelete("/products/{id}", (int id) =>
{
    var existingProduct = InMemoryProductRepository.GetById(id);
    if (existingProduct is null) return Results.NotFound();

    InMemoryProductRepository.Delete(id);
    return Results.NoContent();
});

// Simple user store
var users = new Dictionary<string, string>
{
    { "ravi.tambade@transflower.in", "seed" },
    { "shubhangi.tambade@transflower.in", "transflower" },
    { "sameer.patil@ibm.come", "ibm" },
};

// Login endpoint
app.MapPost("/login", (LoginRequest request, IConfiguration config) =>
{
    if (users.TryGetValue(request.Username, out var password) && password == request.Password)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(config["Jwt:Key"]);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new Claim[]
            {
                new Claim(ClaimTypes.Name, request.Username)
            }),
            Expires = DateTime.UtcNow.AddHours(1),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature),
            Issuer = config["Jwt:Issuer"],
            Audience = config["Jwt:Issuer"]
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        return Results.Ok(new { Token = tokenHandler.WriteToken(token) });
    }
    return Results.Unauthorized();
});

// Protected endpoint
app.MapGet("/protected", [Authorize] (HttpContext context) =>
{
    return Results.Ok(new { Message = "You have access to this protected resource." });
});


app.Run();
record LoginRequest(string Username, string Password);
