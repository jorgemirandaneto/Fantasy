using fantasy_backend.Context;
using fantasy_backend.Models;
using System;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace fantasy_backend.Controllers
{
	[EnableCors(origins: "*", headers: "*", methods: "*")]
	public class EtapasController : ApiController
    {
        private FantasyContext db = new FantasyContext();

        [HttpGet]
        public IQueryable<Etapa> GetEtapas()
        {
            return db.Etapas;
        }

        [HttpGet]
        public IHttpActionResult GetEtapa(int id)
        {
            Etapa etapa = db.Etapas.Find(id);
            if (etapa == null)
            {
                return NotFound();
            }

            return Ok(etapa);
        }

        [HttpPost]
        public IHttpActionResult PostEtapa(Etapa etapa)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Etapas.Add(etapa);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = etapa.Id }, etapa);
        }

        [HttpPut]
        public IHttpActionResult PutEtapa([FromUri] int id, [FromBody] Etapa etapa)
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if(id != etapa.Id)
            {
                return BadRequest();
            }

            db.Entry(etapa).State = System.Data.Entity.EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return Ok(etapa);
        }

        [HttpDelete]
        public IHttpActionResult DeleteEtapa(int id)
        {
            Etapa etapa = db.Etapas.Find(id);
            if(etapa == null)
            {
                return NotFound();
            }

            db.Etapas.Remove(etapa);
            db.SaveChanges();
            return Ok(etapa);
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
