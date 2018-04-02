using fantasy_backend.Context;
using fantasy_backend.Models;
using System;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace fantasy_backend.Controllers
{
	[EnableCors(origins: "*", headers: "*", methods: "*")]
	public class EtapaParticipantesController : ApiController
    {
        FantasyContext db = new FantasyContext();

        [HttpGet]
        public IQueryable<EtapaParticipante> GetEtapaParticipante()
        {
            return db.Etapas_Participantes;
        }

        [HttpGet]
        public IHttpActionResult GetEtapaParticipante(int id)
        {
            EtapaParticipante ep = db.Etapas_Participantes.Find(id);
            if(ep == null)
            {
                return NotFound();
            }
            return Ok(ep);
        }

        [HttpPost]
        public IHttpActionResult PostEtapaParticipante(EtapaParticipante ep)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.Etapas_Participantes.Add(ep);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = ep.Id }, ep);
        }

        [HttpPut]
        public IHttpActionResult PutEtapaParticipante([FromUri] int id, [FromBody] EtapaParticipante ep)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if(id != ep.Id)
            {
                return BadRequest();
            }

            db.Entry(ep).State = System.Data.Entity.EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return Ok(ep);
        }

        [HttpDelete]
        public IHttpActionResult DeleteEtapaParticipante(int id)
        {
            EtapaParticipante ep = db.Etapas_Participantes.Find(id);
            if(ep == null)
            {
                return NotFound();
            }

            db.Etapas_Participantes.Remove(ep);
            db.SaveChanges();

            return Ok(ep);
        }

        protected override void Dispose(bool disposing)
        {
            if(disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);    
        }

    }
}
