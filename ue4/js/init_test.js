/**
 * Created by Rocko on 20.01.2016.
 */
$(document).ready(function() {

//------------------------Edit Button------
    $.fn.dataTable.TableTools.buttons.editButton = $.extend(
        true,
        {},
        $.fn.dataTable.TableTools.buttonBase,
        {
            "sNewLine":    "<br>",
            "sButtonText": "Edit Button",
            "fnClick": function( button, conf){

                EditClick(this,TableTools.fnGetInstance(table_id),button, conf );
            }
        }
    );



//-------------------------Add Button-----------
    $.fn.dataTable.TableTools.buttons.addButton = $.extend(
        true,
        {},
        $.fn.dataTable.TableTools.buttonBase,
        {
            "sNewLine":    "<br>",
            "sButtonText": "Add Button",
            "fnClick": function( button, conf){

                addClick(this);
            }
        }
    );



//--------------------------Delete Button---------
    $.fn.dataTable.TableTools.buttons.deleteButton = $.extend(
        true,
        {},
        $.fn.dataTable.TableTools.buttonBase,
        {
            "sNewLine":    "<br>",
            "sButtonText": "Delete Button",
            "fnClick": function( button, conf){
                deleteClick(this,TableTools.fnGetInstance(table_id),button,conf);
            }
        }
    );

//--------------------Initialise Datatable---------

    var myTable;
    myTable = $('#example').DataTable({
        "order":[[0,"desc"]],
        aaData:"server-response.php",
        dom:  'T<"clear">lfrtip',


        tableTools: {
            sRowSelect: 'single',
            "aButtons": [ {
                "sExtends":    "editButton",
                "sButtonText": "Edit",
                "target":      "#"+"example"
            },
                {
                    "sExtends":    "addButton",
                    "sButtonText": "Add",
                    "target":      "#"+"example"
                },
                {
                    "sExtends":    "deleteButton",
                    "sButtonText": "Delete",
                    "target":      "#"+"example"
                } ]
        }

        , "search": {
            "regex": true,
            "smart": false
        }

    });



}); //--------------End of $(document).ready()-------------
