function createToolbar(toolbarHeight, toolbarBg, toolbarOptionBtnHoverBg, toolbarOptionBtnActiveBg, toolbarOptionBtnTxtColor, toolbarOptionBtnPadding, toolbarOptionBtns) {
    let toolbar = document.createElement("div");
    toolbar.id = "toolbar";
    toolbar.style = `position: fixed; top: 0; left: 0; right: 0; height: ${toolbarHeight}px; background-color: ${toolbarBg};`;

    for (const btnItem in toolbarOptionBtns) {
        let toolbarBtn = document.createElement("button");
        toolbarBtn.className = "toolbarBtn";
        toolbarBtn.style = `color: ${toolbarOptionBtnTxtColor}; height: 100%; border: none; padding-left: ${toolbarOptionBtnPadding}px; padding-right: ${toolbarOptionBtnPadding}px;`
        toolbarBtn.textContent = btnItem;

        let optionMenu = document.createElement("div");
        optionMenu.id = "optionMenu_" + btnItem;
        optionMenu.className = "optionMenu";
        optionMenu.style = `display: none; flex-direction: column; height: fit-content; background-color: ${toolbarBg}; position: fixed; top: ${toolbarHeight}px; left: 0;`;

        for (option in toolbarOptionBtns[btnItem]) {
            let toolbarOptionMenuBtn = document.createElement("button");
            toolbarOptionMenuBtn.id = "toolbarMenuBtn" + option;
            toolbarOptionMenuBtn.className = "toolbarMenuBtn";
            toolbarOptionMenuBtn.style = `color: ${toolbarOptionBtnTxtColor}; width: 100%; border: none; padding-left: ${toolbarOptionBtnPadding}px; padding-right: ${toolbarOptionBtnPadding}px; padding-top: 5px; padding-bottom: 5px;`
            toolbarOptionMenuBtn.textContent = option;
            toolbarOptionMenuBtn.setAttribute("onclick", `${toolbarOptionBtns[btnItem][option]}()`);

            optionMenu.appendChild(toolbarOptionMenuBtn);
        }

        toolbarBtn.addEventListener("click", function() {
            for (menu of document.getElementsByClassName("optionMenu")) {
                menu.style.display = "none";
            }

            for (optionMenuBtn of document.getElementsByClassName("toolbarBtn")) {
                optionMenuBtn.classList.remove("activeBtn");
            }


            toolbarBtn.classList.add("activeBtn");
            optionMenu.style.display = "flex";
        });

        document.addEventListener("click", function(event) {
            if (!document.body.contains(document.getElementById("toolbar"))) {
                console.log(":3");
                for (menu of document.getElementsByClassName("optionMenu")) {
                    menu.style.display = "none";
                }

                for (optionMenuBtn of document.getElementsByClassName("toolbarBtn")) {
                    optionMenuBtn.classList.remove("activeBtn");
                }
            }
        });

        toolbar.appendChild(toolbarBtn);
        toolbar.appendChild(optionMenu);
    }

    document.body.appendChild(toolbar);

    const style = document.createElement("style");
    style.innerHTML = `
    .toolbarBtn, .toolbarMenuBtn {
        background-color: ${toolbarBg};
    }

    .toolbarBtn:hover, .toolbarMenuBtn:hover {
        background-color: ${toolbarOptionBtnHoverBg};
    }

    .activeBtn {
        background-color: ${toolbarOptionBtnActiveBg} !important;
    }
    `;
    document.head.appendChild(style);
}