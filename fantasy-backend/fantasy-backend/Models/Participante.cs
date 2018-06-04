using Microsoft.AspNet.Identity.EntityFramework;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace fantasy_backend.Models
{
    [Table("Participantes", Schema = "Fantasy")]
    public class Participante
    {
        [Key]
        public int Id { get; set; }
      
        public string Nome { get; set; }

        [Required(ErrorMessage = "Obrigatório informar o Email do Participante")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Obrigatório informar o Senha do Participante")]
        public string Senha { get; set; }
    }
}