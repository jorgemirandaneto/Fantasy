namespace fantasy_backend.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class criandoastables : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "Fantasy.Etapas",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Nome = c.String(nullable: false, maxLength: 255),
                        Ano = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "Fantasy.Etapas_Participantes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FKParticipante = c.Int(nullable: false),
                        FKEtapa = c.Int(nullable: false),
                        Pontuacao = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("Fantasy.Etapas", t => t.FKEtapa)
                .ForeignKey("Fantasy.Participantes", t => t.FKParticipante)
                .Index(t => t.FKParticipante)
                .Index(t => t.FKEtapa);
            
            CreateTable(
                "Fantasy.Participantes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Nome = c.String(nullable: false, maxLength: 255),
                        Email = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("Fantasy.Etapas_Participantes", "FKParticipante", "Fantasy.Participantes");
            DropForeignKey("Fantasy.Etapas_Participantes", "FKEtapa", "Fantasy.Etapas");
            DropIndex("Fantasy.Etapas_Participantes", new[] { "FKEtapa" });
            DropIndex("Fantasy.Etapas_Participantes", new[] { "FKParticipante" });
            DropTable("Fantasy.Participantes");
            DropTable("Fantasy.Etapas_Participantes");
            DropTable("Fantasy.Etapas");
        }
    }
}
