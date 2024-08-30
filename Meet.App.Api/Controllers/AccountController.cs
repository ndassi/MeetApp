using System.Security.Cryptography;
using System.Security.Cryptography.Xml;
using System.Text;
using Meet.App.Api.Data;
using Meet.App.Api.Dtos;
using Meet.App.Api.Entities;
using Meet.App.Api.Interfaces;
using Meet.App.Api.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Meet.App.Api.Controllers;

[AllowAnonymous]
public class AccountController : BaseApiController
{
    public ITokenService _tokenService { get; }

    public AccountController(DataContext dbContext, ITokenService tokenService) : base(dbContext)
    {
        _tokenService = tokenService;
    }

    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(string username, string password){
        if (await UserExist(username)) return BadRequest("Bad request");

        var hmac = new  HMACSHA512();
        
        AppUser user = new AppUser{
            UserName = username, 
            PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password)),
            PasswordSalt = hmac.Key
        };  

        dbContext.Add(user);
        await dbContext.SaveChangesAsync();

        return new UserDto{UserName = user.UserName, CredentialToken = _tokenService.CreateToken(user)};

    }

    [HttpPost("login")]
     public async Task<ActionResult<UserDto>> Login(LoginDto loginDto){

        AppUser? user =  await dbContext.Users.FirstOrDefaultAsync(x=>x.UserName == loginDto.UserName); 

        if ( user is null ) return BadRequest("Bad request");

        var hmac = new  HMACSHA512(user.PasswordSalt);

        if (Encoding.UTF8.GetString(user.PasswordHash) != 
            Encoding.UTF8.GetString(hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password)))) 
         return Unauthorized("Wrong Password");

        return new UserDto{UserName = user.UserName, CredentialToken = _tokenService.CreateToken(user)};

    }

    private async Task<bool> UserExist(string username)
    {
        return await dbContext.Users.AnyAsync(u => u.UserName.ToLower() == username.ToLower());
    }
}

