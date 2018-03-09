using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace fantasy_backend.Models
{
    [Table("Etapas", Schema = "Fantasy")]
    public class Etapa
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Obrigatório informar o Nome da Etapa")]
        [StringLength(255, ErrorMessage = "O tamanho máximo do Nome da Etapa é de 255 caracteres")]
        public string Nome { get; set; }

        [Required(ErrorMessage = "Obrigatório informar o Ano da Etapa")]
        public int Ano { get; set; }
    }
}