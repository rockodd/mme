/**
 * Created by Rocko on 20.01.2016.
 */

var editor; // use a global for the submit and return data rendering in the examples


$(document).ready(function() {
    $('#example').dataTable( {
        "aProcessing": true,
        "aServerSide": true,
        "ordering": true,
        "order": [[ 0, "desc" ]],

        "info":     false,
        "ajax": "server-response.php"
    } );
} );


