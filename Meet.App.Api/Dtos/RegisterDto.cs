using System;
using System.ComponentModel.DataAnnotations;

namespace Meet.App.Api.Dtos
{
    public class RegisterDto
    {
        [Required]
        public  string UserName { get; set; } = string.Empty;

        [Required]
        [StringLength(8, MinimumLength = 3)]
        public  string Password { get; set; } = string.Empty;
    }
}
