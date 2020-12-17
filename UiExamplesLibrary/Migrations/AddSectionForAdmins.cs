using Umbraco.Core.Logging;
using Umbraco.Core.Migrations;
using Umbraco.Core.Scoping;
using Umbraco.Core.Services;
using Umbraco.Web;

namespace UiExamplesLibrary.Migrations
{
    public class AddSectionForAdmins : IMigration
    {
        private readonly IProfilingLogger _logger;
        private readonly IUmbracoContextFactory _context;
        private readonly IScopeProvider _scopeProvider;
        private readonly IUserService _userService;

        public AddSectionForAdmins(IProfilingLogger logger, IUmbracoContextFactory contextFactory, IScopeProvider scopeProvider, IUserService userService)
        {
            _logger = logger;
            _context = contextFactory;
            _scopeProvider = scopeProvider;
            _userService = userService;
        }
        
        public void Migrate()
        {
            using (UmbracoContextReference umbracoContextReference = _context.EnsureUmbracoContext())
            {

                using (var scope = _scopeProvider.CreateScope())
                {
                    var adminGroup = _userService.GetUserGroupByAlias(Umbraco.Core.Constants.Security.AdminGroupAlias);
                    adminGroup.AddAllowedSection("uiExamples");
                    
                    _userService.Save(adminGroup);

                    scope.Complete();
                }
            }

            _logger.Info<AddSectionForAdmins>("Post migration completed");
        }
    }
}