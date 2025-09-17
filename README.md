# EasyToolbar
 A customizable, easy to use Javascript/HTML toolbar for editor sites or anything that needs a toolbar!


## How to use it

The function to create the toolbar
____
Use createToolbar() to, you guessed it lol, create the toolbar!


The variables are as follows:

You can adjust the height of the toolbar, the background color of the toolbar, the hover background color of the option and menu buttons, the background color of the option and menu buttons when active, the text color of the option and menu buttons, the text color of the option and menu buttons when active, the horizontal text padding of the option and menu buttons, and the most important part, the actual menus and their buttons, customized with a dictionary array.

Example toolbar:
createToolbar(35, "#242424", "#5c5c5c", "#2a3638", "white", "white", 7, {"File":{"Open":"openEditMenu", "Save":"openFileMenu"}, "Edit":{"Copy":"openEditMenu", "Paste":"openFileMenu"}, "Tools":{"Delete CoAI":"deleteMsAI", "Pen":"ShowPenTool"}});

____

How to import it
____
Just put the following tag in your HTML:

``<script src="https://raw.githubusercontent.com/YourFurryDeveloper/EasyToolbar.JS/refs/heads/main/easyToolbar.js"></script>``
