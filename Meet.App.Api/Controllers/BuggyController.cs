using System;
using Meet.App.Api.Data;
using Meet.App.Api.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Meet.App.Api.Controllers
{
    [AllowAnonymous]
    public class BuggyController : BaseApiController
    {
        public BuggyController(DataContext dataContext) : base(dataContext)
        {
        }

        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound(){
            var thing = dbContext.Users.Find(-1);

            if (thing == null)  return NotFound();

            return thing;
        }

        [HttpGet("server-error")]
        public ActionResult<AppUser> GetServerError(){
            var thing = dbContext.Users.Find(-1) ?? throw new Exception("A bad thing has happened");

            return thing;
        }

        [HttpGet("bad-request")]
        public ActionResult<AppUser> GetBadRequest(){
            return BadRequest("Thins was not a good request");
        }
    }
}
