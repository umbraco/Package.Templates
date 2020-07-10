using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

using Umbraco.Core.Composing;
using Umbraco.Web;
using Umbraco.Web.JavaScript;

namespace UmbracoPackage._1.Controllers
{
    [RuntimeLevel(MinLevel = Umbraco.Core.RuntimeLevel.Run)]
    public class DashboardComposer : ComponentComposer<DashboardComponent> 
    { }

    public class DashboardComponent : IComponent
    {
        public void Initialize()
        {
            ServerVariablesParser.Parsing += ServerVariablesParser_Parsing;
        }

        private void ServerVariablesParser_Parsing(object sender, Dictionary<string, object> e)
        {
            if (HttpContext.Current == null) throw new InvalidOperationException("HttpContext is null");
            var urlHelper = new UrlHelper(new RequestContext(new HttpContextWrapper(HttpContext.Current), new RouteData()));

            e["umbracopackage__1"] = new Dictionary<string, object>()
            {
                { "dashboardController", urlHelper.GetUmbracoApiServiceBaseUrl<DashboardApiController>(controller => controller.GetApi()) }
            };
        }

        public void Terminate()
        {
            
        }
    }
}
