const dropdownMenu = {
    label: "Dropdown",
    items: [
      "Item 1",
      "Item 2",
      {
        label: "Submenu 1",
        items: [
          "Subitem 1.1",
          "Subitem 1.2",
          {
            label: "Sub-submenu 1",
            items: ["Sub-subitem 1.1", "Sub-subitem 1.2", "Sub-subitem 1.3"],
          },
        ],
      },
      "Item 3",
      {
        label: "Submenu 2",
        items: ["Subitem 2.1", "Subitem 2.2"],
      },
    ],
  };

const $dropdownContainer = document.getElementById("dropdown-container");
$dropdownContainer.appendChild(generateDropdownHTML(dropdownMenu));

function generateDropdownHTML(menu) {
    // Maak een `<details>` element voor het menu
    const details = document.createElement("details");

    // Voeg het label toe als een `<summary>`
    const summary = document.createElement("summary");
    summary.textContent = menu.label || "Menu";
    details.appendChild(summary);

    // Itereer door de items in het menu
    menu.items.forEach(item => {
        if (typeof item === "string") {
            // Als het een string is, voeg een eenvoudige tekst toe
            const div = document.createElement("div");
            div.textContent = item;
            details.appendChild(div);
        } else if (typeof item === "object" && item.label && item.items) {
            // Als het een genest menu is, roep de functie recursief aan
            const nestedDetails = generateDropdownHTML(item);
            details.appendChild(nestedDetails);
        }
    });

    return details;
}