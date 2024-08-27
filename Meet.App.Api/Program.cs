using System.Text;
using Meet.App.Api.Data;
using Meet.App.Api.Interfaces;
using Meet.App.Api.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors( option=>{
    option.AddPolicy("CorsPolicy",policy =>{
        policy.WithOrigins( "http://localhost:4200", "https://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod()
            
        ;
    });
});

builder.Services.AddControllers();
builder.Services.AddDbContext<DataContext>(opt =>{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
});


// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<ITokenService, TokenService>();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(options => {
    var tokenKey = builder.Configuration["TokenKey"] ?? throw new Exception("Can not find any Token Key in appsetting");
    options.TokenValidationParameters =  new Microsoft.IdentityModel.Tokens.TokenValidationParameters{
        ValidateIssuerSigningKey=true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(tokenKey)),
        ValidateIssuer = false, 
        ValidateAudience = false,
    };
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors("CorsPolicy");
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
