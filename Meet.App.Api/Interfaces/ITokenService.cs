using System;
using Meet.App.Api.Entities;

namespace Meet.App.Api.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);

    }
}
