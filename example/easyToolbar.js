function createToolbar(toolbarHeight, toolbarBg, toolbarOptionBtnBg, toolbarOptionBtnHoverBg, toolbarOptionBtnTxtColor, toolbarOptionBtnPadding, toolbarOptionBtns) {
    console.log(":3")
    let toolbar = document.createElement("div");
    toolbar.id = "toolbar";
    toolbar.style = `position: fixed; top: 0; left: 0; right: 0; height: ${toolbarHeight}px; background-color: ${toolbarBg};`;

    for (i = 0; i < toolbarOptionBtns.length; i++) {
        let toolbarBtn = document.createElement("button");
        toolbarBtn.id = "toolbarBtn";
        toolbarBtn.style = `background-color: ${toolbarOptionBtnBg}; color: ${toolbarOptionBtnTxtColor}; height: 100%; border: none; padding-left: ${toolbarOptionBtnPadding}px; padding-right: ${toolbarOptionBtnPadding}px;`
        toolbarBtn.textContent = toolbarOptionBtns[i][0];
        toolbarBtn.setAttribute("onclick", `${toolbarOptionBtns[i][1]}()`);

        toolbar.appendChild(toolbarBtn);
    }

    document.body.appendChild(toolbar);
}