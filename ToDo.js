$(function() {
    var todos = '';
	function standUp() {
		// get entries from localstorage if they exist.
		// populate the list with entries and ids.

		if (localStorage && localStorage.length > 0) {

			// run populateList to insert all the entries
			// populateList();
		} 
        else {
			var a = [];
			localStorage.setItem('todos', JSON.stringify(a));
		}

		// setListners after the list has been built.  Populate list:
		populateList();
	    setListeners();
	}
                
  // set up listeners for TODO app
  
	function setListeners() {
		//listen for keypresses
		$('#new-todo').keyup(function(e) {
			// check which key has been pressed.
			checkKeyPress(e);
		})
	}
     function checkKeyPress(e) {
		if (e.keyCode == 13) {
 //           console.log($('#new-todo').val());
			insertEntry();
		} else if (e.keyCode == 27) {
			console.log('esc pressed== abort editing');
		}
	}

   	// build the entire list based on the contents of localStorage
	function populateList() {
		todos = JSON.parse(localStorage.getItem('todos'));
		if(todos.length > 0) {
			for (var i = 0; i <= todos.length -1 ; i++) {
				insertEntry(todos[i]['name'],todos[i]['id'],todos[i]['completed']);
			};
		}
	} 

function insertEntry() {
  var entry = $('#new-todo').val();
  $('.template li').clone().appendTo('#todo-list');
  
		$('#todo-list li:last-child label').text(entry);
		$('#todo-list li:last-child').attr('data-id',id);
		if(status) {
		$('#todo-list li:last-child').addClass('completed');
		$('#todo-list li:last-child .toggle').attr('checked', true)
		}
  // after inserting entry, reset the input box to original state:
		$('#new-todo').val('');
//		addListItemListener(id);    (references code to add new listener)                        
 }

	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;

	
    function uuid () {
			/*jshint bitwise:false */
			var i, random;
			var uuid = '';

			for (i = 0; i < 32; i++) {
				random = Math.random() * 16 | 0;
				if (i === 8 || i === 12 || i === 16 || i === 20) {
					uuid += '-';
				}
				uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
			}

			return uuid;
    }
         
     function updateEntry() {
		var id = $('.editing').attr('data-id');
		for(i=0; i <= todos.length-1; i++) {
			if(todos[i]['id'] == id) {				
				todos[i]['name'] = $('.editing .edit').val();
			}
		}
		localStorage.setItem('todos', JSON.stringify(todos));
		$('.editing label').text($('.editing .edit').val());
		$('.editing').removeClass('editing').find('.edit').val('');
	}

    function saveEntry(entry) {
          var ID = uuid();
          var todoEntry = {
            'id':ID,
            'name':entry
          }
          console.log(todoEntry);
         localStorage.setItem('Todos', JSON.stringify(todoEntry));
                 
		insertEntry(entry,id);             
    }
  
  
  function addListItemListener(id) {
		$("li[data-id *= '" + id + "']").dblclick(function(event) {			
			// if dblclick was on a label and the parent isn't marked completed.
			if(event.target.nodeName == "LABEL" && (!$(event.target).closest('li').hasClass('completed'))) {
				// remove the 'editing' class from any other todo items and remove any other editor listeners
				$('.editing').removeClass('editing');
				$('.edit').off('keyup');
				var input = $(event.target);
				var text = input.text();
				input.closest('li').addClass('editing');
				input.closest('li').find('.edit').val(text).focus();
				addEditorListener();
			}
		});
		$("li[data-id *= '" + id + "']").click(function(event) {
			if(event.target.nodeName == 'INPUT') {
				var item = $(event.target).closest('li');
				if(item.hasClass('completed')){
					item.removeClass('completed');
					updateCompleted(id, false)
				} else {					
					item.addClass('completed');
					updateCompleted(id, true)
				}
			}
		});
	}

	function addEditorListener() {
		$('.editing .edit').on('keyup', function(e) {
			checkEditPress(e);
		})

	}

	function updateEntry() {
		var id = $('.editing').attr('data-id');
		for(i=0; i <= todos.length-1; i++) {
			if(todos[i]['id'] == id) {				
				todos[i]['name'] = $('.editing .edit').val();
			}
		}
		localStorage.setItem('todos', JSON.stringify(todos));
		$('.editing label').text($('.editing .edit').val());
		$('.editing').removeClass('editing').find('.edit').val('');
	}

	function updateCompleted(id, status) {
		for(i=0; i <= todos.length-1; i++) {
			if(todos[i]['id'] == id) {				
				todos[i]['completed'] = status;
			}
			localStorage.setItem('todos', JSON.stringify(todos));
		}	
	}

	function abortEditing() {
		$('.editing').removeClass('editing');
		$('.edit').val('');
	}
  
  
    setListeners();
    standUp();                        
  });
  
  
  
    
    //Add listener for dblclick event for editing a list item
    
    // Add listener for clicking on a checkmark
    
    //add listener for clicking on the complete-all item
    
    // add listener for a click on the clear all completed link
    
    //  add listener for a click on the "X" to delete a single item
    
    // add listener for hovering over a list item that will show the "x"
    
    // add listener for a click on the show "all", Active. Completed links
    
    

  