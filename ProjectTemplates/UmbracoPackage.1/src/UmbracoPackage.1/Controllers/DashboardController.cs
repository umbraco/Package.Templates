using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using System.Web.Mvc;

using ClientDependency.Core;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using NPoco.Expressions;

using Umbraco.Core.Configuration;
using Umbraco.Web.Mvc;
using Umbraco.Web.WebApi;

namespace UmbracoPackage._1.Controllers
{
    public class DashboardApiController : UmbracoAuthorizedApiController
    {
        /// <summary>
        ///  GetApi - Called in our ServerVariablesParser.Parsing event handler
        ///  this gets the URL of this API, so we don't have to hardwire it anywhere
        /// </summary>
        [HttpGet]
        public bool GetApi() => true; 


        /// <summary>
        ///  Simple call return the time,
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public Object GetServerInfo()
        {
            return new
            {
                status = GlobalSettings.ConfigurationStatus,
                time = DateTime.Now
            };
        }
    }
}
