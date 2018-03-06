using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Fantasy.Models;

namespace Fantasy.Controllers
{
    [Produces("application/json")]
    [Route("api/Pontuacao")]
    public class PontuacaoController : Controller
    {
        private readonly FantasyContext _context;

        public PontuacaoController(FantasyContext context)
        {
            _context = context;
        }

        // GET: api/Pontuacao
        [HttpGet]
        public IEnumerable<Pontuacao> GetPontuacao()
        {
            return _context.Pontuacao;
        }

        // GET: api/Pontuacao/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPontuacao([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pontuacao = await _context.Pontuacao.SingleOrDefaultAsync(m => m.id == id);

            if (pontuacao == null)
            {
                return NotFound();
            }

            return Ok(pontuacao);
        }

        // PUT: api/Pontuacao/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPontuacao([FromRoute] int id, [FromBody] Pontuacao pontuacao)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pontuacao.id)
            {
                return BadRequest();
            }

            _context.Entry(pontuacao).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PontuacaoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Pontuacao
        [HttpPost]
        public async Task<IActionResult> PostPontuacao([FromBody] Pontuacao pontuacao)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Pontuacao.Add(pontuacao);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPontuacao", new { id = pontuacao.id }, pontuacao);
        }

        // DELETE: api/Pontuacao/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePontuacao([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var pontuacao = await _context.Pontuacao.SingleOrDefaultAsync(m => m.id == id);
            if (pontuacao == null)
            {
                return NotFound();
            }

            _context.Pontuacao.Remove(pontuacao);
            await _context.SaveChangesAsync();

            return Ok(pontuacao);
        }

        private bool PontuacaoExists(int id)
        {
            return _context.Pontuacao.Any(e => e.id == id);
        }
    }
}