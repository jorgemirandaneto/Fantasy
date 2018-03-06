using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Fantasy.Models
{
    [Table("etapas", Schema = "fantasy")]
    public class Etapa
    {
        [Key]
        public int id { get; set; }
        public string nomeetapa { get; set; }
    }
}
