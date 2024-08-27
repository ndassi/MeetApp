using System.Security.Cryptography;
using System.Security.Cryptography.Xml;
using System.Text;
using Meet.App.Api.Data;
using Meet.App.Api.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Meet.App.Api.Controllers;
public class AccountController : BaseApiController
{
    public AccountController(DataContext dbContext) : base(dbContext)
    {
        
    }

    [HttpPost("account/register")]
    public ActionResult<AppUser> Register(string username, string password){
        if (UserExist(username)) return BadRequest("Bad request");

        var hmac = new  HMACSHA512();
        
        AppUser user = new AppUser{
            UserName = username, 
            PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password)),
            PasswordSalt = hmac.Key
        };  

        dbContext.Add(user);
        dbContext.SaveChanges();

        return user;

    }

    [HttpGet("account/login")]
     public ActionResult<AppUser> Login(string username, string password){

        AppUser? user = dbContext.Users.FirstOrDefault(x=>x.UserName == username); 

        if ( user is null ) return BadRequest("Bad request");

        var hmac = new  HMACSHA512(user.PasswordSalt);

        if (Encoding.UTF8.GetString(user.PasswordHash) != 
            Encoding.UTF8.GetString(hmac.ComputeHash(Encoding.UTF8.GetBytes(password)))) 
         return Unauthorized("Wrong Password");

        return user;

    }

    private bool UserExist(string username)
    {
        return dbContext.Users.Any(u => u.UserName.ToLower() == username.ToLower());
    }
}