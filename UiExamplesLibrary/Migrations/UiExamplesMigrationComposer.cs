using Umbraco.Core.Composing;
using Umbraco.Core.Logging;
using Umbraco.Core.Migrations;
using Umbraco.Core.Migrations.Upgrade;
using Umbraco.Core.Scoping;
using Umbraco.Core.Services;

namespace UiExamplesLibrary.Migrations
{
    [RuntimeLevel(MinLevel = Umbraco.Core.RuntimeLevel.Run)]
    public class UiExamplesMigrationComposer : ComponentComposer<UiExamplesMigrationComponent>, IUserComposer
    { }

    public class UiExamplesMigrationComponent : IComponent
    {
        private readonly IScopeProvider _scopeProvider;
        private readonly IMigrationBuilder _migrationBuilder;
        private readonly IKeyValueService _keyValueService;
        private readonly IProfilingLogger _profilingLogger;

        public UiExamplesMigrationComponent(IScopeProvider scopeProvider, IMigrationBuilder migrationBuilder, IKeyValueService keyValueService, IProfilingLogger profilingLogger)
        {
            _scopeProvider = scopeProvider;
            _migrationBuilder = migrationBuilder;
            _keyValueService = keyValueService;
            _profilingLogger = profilingLogger;
        }


        public void Initialize()
        {
            var upgrader = new Upgrader(new UiExamplesMigrationPlan());
            upgrader.Execute(_scopeProvider, _migrationBuilder, _keyValueService, _profilingLogger);
        }

        public void Terminate()
        { }
    }
}