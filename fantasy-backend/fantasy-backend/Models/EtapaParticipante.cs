using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace fantasy_backend.Models
{
    [Table("Etapas_Participantes", Schema = "Fantasy")]
    public class EtapaParticipante
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Participante")]
        public int FKParticipante { get; set; }
        public virtual Participante Participante { get; set; }

        [ForeignKey("Etapa")]
        public int FKEtapa { get; set; }
        public virtual Etapa Etapa { get; set; }

        public double Pontuacao { get; set; }
    }
}