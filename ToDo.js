$(document).ready(function($) {
  // set up listeners for TODO app
  
  function setListeners () {
    // Listener for pressing of Enter key for creation of new ToDO item
     
     function checkKeyPress(e) {
		if(e.keyCode == 13) {
            console.log($(this).val());
			insertEntry();
		} else if(e.keyCode == 27) {
			console.log('esc');
		}
	}
     //  Add all sorts of other code here to add the item to list, etc...
   }
    
    //Add listener for dblclick event for editing a list item
    
    // Add listener for clicking on a checkmark
    
    //add listener for clicking on the complete-all item
    
    // add listener for a click on the clear all completed link
    
    //  add listener for a click on the "X" to delete a single item
    
    // add listener for hovering over a list item that will show the "x"
    
    // add listener for a click on the show "all", Active. Completed links
    
    

  



function insertEntry() {
  var entry = $('#new-todo').val();
  $('.item li').clone().appendTo('#listItems');
  // after inserting entry, reset the input box to original state:
   $('#inputBox').clone().replace("inputBox");                                 
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
          
    function saveEntry(entry) {
          var ID = uuid();
          var todoEntry = {
            'id':ID,
            'name':entry
          }
         localStorage.setItem('Todos', JSON.stringify(todoEntry));
                              
    }
    
   setListeners();                         
  });