tablePagination
===============

HTML Table Pagination (jQuery Plugin)


Dependencies
============
<!-- jquery -->
<script src="http://code.jquery.com/jquery-1.11.0.min.js">
<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js">

<link href="pagination.css" media="all" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="pagination.js">

Usage
=====
<script type="text/javaScript">	
	$(document).ready(function(){		
		$('#table-div-id').tablePaginate({navigateType:'full',recordPerPage:2});
	});
</script>

Options
=======
recordPerPage:20,			// Display records per page
pageNumber:1,				// GoTo Pagenumber - Default : 1
fullData:false,				// True : Disable pagination, False - Enable Pagination
buttonPosition:'before',		// before, after
navigateType:'navigator'		// navigator (first,prev,next,last buttons), full (display page numbers)
