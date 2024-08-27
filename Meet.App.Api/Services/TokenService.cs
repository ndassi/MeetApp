using System;
using Meet.App.Api.Entities;
using Meet.App.Api.Interfaces;


using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Meet.App.Api.Services
{
    public class TokenService : ITokenService
    {
        public IConfiguration configuration { get; }
        public TokenService(IConfiguration _configuration)
        {
            configuration = _configuration;
        }


        public string CreateToken(AppUser user)
        {
            var tokenHandler  = new JwtSecurityTokenHandler();

            List<Claim>? claims = new(){
                new(ClaimTypes.NameIdentifier, user.UserName),
            };
            string TokenKey = configuration[nameof(TokenKey)] ?? throw new Exception($"Can not find a {nameof(TokenKey)} in the appsetting");

            if (TokenKey.Length < 64)
            {
                throw new Exception("Token key is less than 64");

            }

            SymmetricSecurityKey key = new(Encoding.UTF8.GetBytes(TokenKey));
            SigningCredentials creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature){};
            SecurityTokenDescriptor tokenDescriptor = new(){
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = creds
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }
    }
}
