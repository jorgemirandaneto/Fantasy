using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Fantasy.Models;

namespace Fantasy.Models
{
    public class FantasyContext : DbContext
    {
        public DbSet<Usuario> Usuario { get; set; }
        public DbSet<Pontuacao> Pontuacao { get; set; }
        public DbSet<Etapa> Etapa { get; set; }

        public FantasyContext(DbContextOptions<FantasyContext> options) : base(options) { }
    }
}
