using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace fantasy_backend.Models
{
    [Table("Participantes", Schema = "Fantasy")]
    public class Participante
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Obrigatório informar o Nome do Participante")]
        [StringLength(255, ErrorMessage = "O tamanho máximo do Nome do Participante é de 255 caracteres")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Obrigatório informar o Email do Participante")]
        public string Email { get; set; }
    }
}