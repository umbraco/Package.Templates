using System;
using System.Collections.Generic;
using System.Net.Http.Formatting;
using System.Web.Http.ModelBinding;
using Umbraco.Web.Models.ContentEditing;
using Umbraco.Web.Models.Trees;
using Umbraco.Web.Trees;
using Umbraco.Web.WebApi.Filters;

namespace UmbracoPackage._1.Trees
{
    [Tree("#sectionAlias#", "#treeAlias#", TreeTitle = "#treeTitle#")]
#if (searchable)
    public class #treeTitle#TreeController : TreeController, ISearchableTree
#else
    public class #treeTitle#TreeController : TreeController
#endif
    {
        protected override MenuItemCollection GetMenuForNode(string id, [ModelBinder(typeof(HttpQueryStringModelBinder))] FormDataCollection queryStrings)
        {
            throw new NotImplementedException();
        }

        protected override TreeNodeCollection GetTreeNodes(string id, [ModelBinder(typeof(HttpQueryStringModelBinder))] FormDataCollection queryStrings)
        {
            throw new NotImplementedException();
        }

#if (searchable)
        public IEnumerable<SearchResultEntity> Search(string query, int pageSize, long pageIndex, out long totalFound, string searchFrom = null)
        {
            throw new NotImplementedException();
        }
#endif
    }
}
