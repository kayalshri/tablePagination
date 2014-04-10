/*
Author 		: Giriraj Namachivayam
DOC		: 05-April-2014
Basic Usage 	: $('#table_div_id').tablePaginate();
*/

/*
The MIT License (MIT)

Copyright (c) 2014 https://github.com/kayalshri/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

(function($){
        $.fn.extend({
            tablePaginate: function(options) {
                var defaults = {
						recordPerPage:20,				// Display records per page
						pageNumber:1,					// GoTo Pagenumber - Default : 1
						fullData:false,					// True : Disable pagination, False - Enable Pagination
						buttonPosition:'before',		// before, after
						navigateType:'navigator'		// navigator (first,prev,next,last buttons), full (display page numbers)
						
				};
                
				var options = $.extend(defaults, options);
				var el = this;		
				
			// GET total Records length
				var totalRecords=$(el).find('tbody').find('tr').length;
				
			// Pagination off
				if (defaults.fullData == 'true'){
					defaults.pageNumber = 1;
					defaults.recordPerPage = totalRecords;
				}
							
			// Identify Start & End values
				var end = defaults.pageNumber * defaults.recordPerPage;
				var start = end - defaults.recordPerPage;
				
			// Pagination button
				$('span.pagination').empty().remove();
				var buildButtons = "<span class='pagination'>";

				// Get Total Pages
				var totalPages = Math.ceil(totalRecords/defaults.recordPerPage);
				
				
				if (defaults.navigateType == 'navigator'){
					//First,prev,next,Last buttons
					var firstPage = 1;
					var nextPage = parseInt(defaults.pageNumber) + 1;
					var prevPage = parseInt(defaults.pageNumber) - 1;
					nextPage = (nextPage >= totalPages) ? totalPages : nextPage;
					prevPage = (prevPage < firstPage) ? firstPage : prevPage;
					buildButtons += "<button type='button' id='"+firstPage+"' class='btn btn-warning pagination-btn'><<</button>";
					buildButtons += "<button type='button' id='"+prevPage+"' class='btn btn-warning pagination-btn'><</button>";
					buildButtons += "<button type='button' id='"+nextPage+"' class='btn btn-warning pagination-btn'>></button>";				
					buildButtons += "<button type='button' id='"+totalPages+"' class='btn btn-warning pagination-btn'>>></button>";
				}else{				
					// Display page numbers
					for(var i=1;i<=totalPages;i++){	
						buildButtons += "<button type='button' id='"+i+"' class='btn btn-warning pagination-btn'>"+i+"</button>";
					}
				}
				buildButtons += "</span>";
				
				(defaults.buttonPosition == 'before') ? $(this).before(buildButtons) : $(this).append(buildButtons);
			

			// Display records based on pagination settings
				$(el).find('tbody').find('tr').each(function(rowIndex,data) {	
					$(this).hide();					
					if (start <= rowIndex && end > rowIndex ){
						$(this).show();
						
					}
					
				});
				
			// Pagination button live click
				$(".pagination-btn").live("click",function(){ 
					var id = $(this).attr("id");
						$(el).tablePaginate({
							pageNumber:id,
							recordPerPage:defaults.recordPerPage,
							fullData:defaults.fullData,
							buttonPosition:defaults.buttonPosition,
							navigateType:defaults.navigateType
						});
									
				});
				
			}
        });
    })(jQuery);
        
