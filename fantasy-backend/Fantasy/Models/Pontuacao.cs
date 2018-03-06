using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Fantasy.Models
{
    [Table("pontuacao", Schema = "fantasy")]
    public class Pontuacao
    {
        [Key]
        public int id { get; set; }
        public int fk_usuario { get; set; }
        public int fk_etapa { get; set; }
        public int datatemporada { get; set; }
        public decimal pontuacao { get; set; }
    }
}