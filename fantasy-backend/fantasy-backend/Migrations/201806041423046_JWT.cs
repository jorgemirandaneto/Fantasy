namespace fantasy_backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class JWT : DbMigration
    {
        public override void Up()
        {
            AddColumn("Fantasy.Participantes", "Senha", c => c.String(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("Fantasy.Participantes", "Senha");
        }
    }
}
