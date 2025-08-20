export const greetingAbout = "This is the About page. Hello!";

import ownerImage from "../assets/imgs/owner.png";
import managerImage from "../assets/imgs/manager.png";

export function createAbout() {
    const containerAbout = document.createElement("div");
    containerAbout.classList.add("about-container");
    const heading = document.createElement("h1");
    heading.textContent = "The people making the magical cakes";
    containerAbout.appendChild(heading);
    const contacts = [
        {   name: "Lilly (owner)",
            description: "A couple of words about the owner, Lilly.",
            email: "imaginary-lilly@email.com",
            phone: "123-456-789",
            image: ownerImage,
            id: 1,
        },
        {
            name: "Hal (manager)",
            description: "Some nice words about the manager, Hal.",
            email: "imaginary-hal@email.com",
            phone: "987-654-321",
            image: managerImage,
            id: 2,
        },
    ];
    contacts.forEach(contact => {
        const image = document.createElement("img");
        image.classList.add("about-image");
        image.src = contact.image;
        image.alt = contact.name;
        const title = document.createElement("h2");
        title.classList.add("about-title");
        title.textContent = contact.name;
        const desc = document.createElement("p");
        desc.classList.add("about-desc");
        desc.textContent = contact.description;
        const email = document.createElement("p");
        email.classList.add("about-email");
        email.textContent = contact.email;
        const phone = document.createElement("p");
        phone.classList.add("about-phone");
        phone.textContent = contact.phone;
        const info = document.createElement("div");
        info.classList.add("about-info");
        info.append(title, desc, email, phone);
        const card = document.createElement("div");
        card.classList.add("about-card", `about-card-${contact.id}`);
        card.append(image, info);
        containerAbout.append(card);
    });
    const content = document.querySelector("#content");
    content.appendChild(containerAbout);
}