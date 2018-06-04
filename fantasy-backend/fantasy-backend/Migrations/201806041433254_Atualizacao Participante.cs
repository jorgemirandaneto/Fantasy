namespace fantasy_backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AtualizacaoParticipante : DbMigration
    {
        public override void Up()
        {
            AlterColumn("Fantasy.Participantes", "Nome", c => c.String());
        }
        
        public override void Down()
        {
            AlterColumn("Fantasy.Participantes", "Nome", c => c.String(nullable: false, maxLength: 255));
        }
    }
}
