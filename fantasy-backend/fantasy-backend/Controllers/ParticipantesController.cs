using fantasy_backend.Context;
using fantasy_backend.Models;
using System;
using System.Data.Entity;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace fantasy_backend.Controllers
{
	//[EnableCors(origins: "*", headers: "*", methods: "*")]
	public class ParticipantesController : ApiController
    {
        private FantasyContext db = new FantasyContext();
        [Authorize]
        [HttpGet]
        public IQueryable<Participante> GetParticipantes()
        {
            return db.Participantes;
        }

        [HttpGet]
        public IHttpActionResult GetParticipante(int id)
        {
            Participante participante = db.Participantes.Find(id);
            if (participante == null)
            {
                return NotFound();
            }

            return Ok(participante);
        }

        [HttpPost]
        public IHttpActionResult PostParticipante(Participante participante)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Participantes.Add(participante);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = participante.Id }, participante);
        }

        [HttpPut]
        public IHttpActionResult PutParticipante([FromUri] int id, [FromBody] Participante participante)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != participante.Id)
            {
                return BadRequest();
            }

            db.Entry(participante).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return Ok(participante);
        }

        [HttpDelete]
        public IHttpActionResult DeleteParticipante(int id)
        {
            Participante participante = db.Participantes.Find(id);
            if (participante == null)
            {
                return NotFound();
            }

            db.Participantes.Remove(participante);
            db.SaveChanges();

            return Ok(participante);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}