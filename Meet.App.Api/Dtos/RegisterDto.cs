using System;

namespace Meet.App.Api.Dtos
{
    public class RegisterDto
    {
        public required string UserName { get; set; }
        public required string Password { get; set; }
    }
}
