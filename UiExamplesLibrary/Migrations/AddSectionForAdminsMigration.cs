using Umbraco.Core.Logging;
using Umbraco.Core.Migrations;

namespace UiExamplesLibrary.Migrations
{
    public class AddSectionToAdminsMigration : MigrationBase
    {
        public AddSectionToAdminsMigration( IMigrationContext context) : base(context) { }

        public override void Migrate()
        {
            Context.Logger.Info<AddSectionToAdminsMigration>("Starting migration to add UI Examples section to the admin usergroup");
            Context.AddPostMigration<AddSectionForAdmins>();
            Context.Logger.Info<AddSectionToAdminsMigration>("Migration completed");
        }
    }
}