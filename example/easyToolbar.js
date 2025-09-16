function createToolbar(toolbarHeight, toolbarBg, toolbarOptionBtnBg, toolbarOptionBtnHoverBg, toolbarOptionBtnTxtColor, toolbarOptionBtnPadding, toolbarOptionBtns) {
    let toolbar = document.createElement("div");
    toolbar.id = "toolbar";
    toolbar.style = `position: fixed; top: 0; left: 0; right: 0; height: ${toolbarHeight}px; background-color: ${toolbarBg};`;

    for (const btnItem in toolbarOptionBtns) {
        let toolbarBtn = document.createElement("button");
        toolbarBtn.id = "toolbarBtn";
        toolbarBtn.style = `background-color: ${toolbarOptionBtnBg}; color: ${toolbarOptionBtnTxtColor}; height: 100%; border: none; padding-left: ${toolbarOptionBtnPadding}px; padding-right: ${toolbarOptionBtnPadding}px;`
        toolbarBtn.textContent = btnItem;

        let optionMenu = document.createElement("div");
        optionMenu.id = "optionMenu_" + btnItem;
        optionMenu.style = `display: none; flex-direction: column; height: fit-content; background-color: ${toolbarBg}; position: fixed; top: ${toolbarHeight}px; left: 0;`;

        for (option in toolbarOptionBtns[btnItem]) {
            let toolbarOptionMenuBtn = document.createElement("button");
            toolbarOptionMenuBtn.id = "toolbarMenuBtn" + option;
            toolbarOptionMenuBtn.style = `background-color: ${toolbarOptionBtnBg}; color: ${toolbarOptionBtnTxtColor}; width: 100%; border: none; padding-left: ${toolbarOptionBtnPadding}px; padding-right: ${toolbarOptionBtnPadding}px; padding-top: 5px; padding-bottom: 5px;`
            toolbarOptionMenuBtn.textContent = option;
            toolbarOptionMenuBtn.setAttribute("onclick", `${toolbarOptionBtns[btnItem][option]}()`);

            optionMenu.appendChild(toolbarOptionMenuBtn);
        }

        //toolbarBtn.setAttribute("onclick", openOptionMenu("optionMenu_" + btnItem));
        toolbar.appendChild(toolbarBtn);
        toolbar.appendChild(optionMenu);
    }

    document.body.appendChild(toolbar);
}

function openOptionMenu(menuName) {
    //document.getElementById(menuName).style.display = "flex";
}