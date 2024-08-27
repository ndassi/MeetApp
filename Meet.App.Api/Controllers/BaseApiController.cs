using System;
using Meet.App.Api.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Meet.App.Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
    
    protected DataContext dbContext{ get; set; }

        public BaseApiController(DataContext dataContext)
        {
            dbContext = dataContext;
        }

    }
}
