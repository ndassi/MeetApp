using System;

namespace Meet.App.Api.Dtos
{
    public class UserDto
    {
        public required string UserName { get; set; }
        public required string CredentialToken { get; set; }
    }
}
