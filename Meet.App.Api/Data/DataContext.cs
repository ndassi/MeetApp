using System;
using Meet.App.Api.Entities;
using Microsoft.EntityFrameworkCore;

namespace Meet.App.Api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }
        public DbSet<AppUser> Users { get; set; }

    }
}
