export const greetingAbout = "This is the About page. Hello!";

import ownerImage from "../assets/imgs/owner.png";
import managerImage from "../assets/imgs/manager.png";

export function createAbout() {
    const containerAbout = document.createElement("div");
    containerAbout.classList.add("about-container");
    const heading = document.createElement("h1");
    heading.textContent = "Get to Know Us";
    containerAbout.appendChild(heading);
    const contacts = [
        {   name: "Lilly",
            description: "Lilly is the owner of Lilly's Sweet Treats and the mastermind behind all the delicious cakes you can find on our menu. Each cake first appeared in her dream before she made it a reality for everyone to enjoy.",
            email: "Email: imaginary-lilly@email.com",
            phone: "Phone: 123-456-789",
            image: ownerImage,
            id: 1,
        },
        {
            name: "Hal",
            description: "Hal is Lilly's friendly robot assistant who makes sure the entire operation runs smoothly. He is in charge of everything that isn't cake making: he buys ingredients, does chores, cleans up, etc. He is also the first entity to taste each of Lilly's new cakes.",
            email: "Email: imaginary-hal@email.com",
            phone: "Phone: 987-654-321",
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