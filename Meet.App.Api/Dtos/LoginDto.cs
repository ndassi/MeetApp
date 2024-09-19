using System;

namespace Meet.App.Api.Dtos
{
    public class LoginDto
    {
        public required string UserName { get; set; }
        public required string Password { get; set; }

        public bool isEmpty(){
            return string.IsNullOrEmpty(UserName) || string.IsNullOrEmpty(Password);
        }
    }
}
