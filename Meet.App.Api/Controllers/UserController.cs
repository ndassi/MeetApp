using System;
using Meet.App.Api.Data;
using Meet.App.Api.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Meet.App.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class UserController : ControllerBase
    {
        private readonly DataContext _dataContext;

        public UserController(DataContext dataContext)
        {
            this._dataContext = dataContext;
        }

        [HttpGet]

        public async Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){
            
            var users = await  _dataContext.Users.ToListAsync();
            return users;
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<AppUser?>> GetUsers(int id){
            
            var user = await _dataContext.Users.FirstOrDefaultAsync(x=> x.Id == id);
            return user;
        }

    }
}
