tablePagination
===============

HTML Table Pagination (jQuery Plugin)


Dependencies
============
&lt;!-- jquery --><BR>
&lt;script src="http://code.jquery.com/jquery-1.11.0.min.js"><BR>
&lt;script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"><BR>
<BR>
&lt;link href="pagination.css" media="all" rel="stylesheet" type="text/css" /><BR>
&lt;script type="text/javascript" src="pagination.js"><BR><BR>

Usage
=====
&lt;script type="text/javaScript"><BR>	
	$(document).ready(function(){<BR>		
		$('#table-div-id').tablePaginate({navigateType:'full',recordPerPage:2});<BR>
	});<BR>
&lt;/script><BR>

Options
=======
recordPerPage:20,			// Display records per page<BR>
pageNumber:1,				// GoTo Pagenumber - Default : 1<BR>
fullData:false,				// True : Disable pagination, False - Enable Pagination<BR>
buttonPosition:'before',		// before, after<BR>
navigateType:'navigator'		// navigator (first,prev,next,last buttons), full (display page numbers)<BR><BR>

