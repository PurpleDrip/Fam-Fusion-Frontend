import React from "react";
import { useSelector } from "react-redux";
import ThemeController from "../Components/ThemeController";
import TitleBar from "../Components/TitleBar";
import Facts from "../Components/Facts";
import SectionWithImage from "../Components/SectionWithImage";

function Home() {
  const DEMO_LIST = [
    {
      id: 1,
      name: "John Doe",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officia excepturi laudantium nobis illum ipsum ad ullam impedit iste, vitae dolor pariatur aliquam, tempore voluptas sint fugit soluta maxime inventore!
        Fugiat officia, molestias quo, est placeat debitis perferendis ipsam tempora excepturi tenetur explicabo omnis quae reprehenderit ad eum necessitatibus incidunt illo vitae nesciunt recusandae? Soluta iste ratione optio repellat nam?
        Consectetur nostrum dignissimos eaque officia. Laudantium aut in vel! Magnam perferendis deserunt, sunt aut quibusdam, accusantium culpa ea magni ducimus tempora harum molestias quisquam, saepe mollitia nobis odit fuga sint.
        Excepturi optio omnis tempore cum cupiditate at aspernatur delectus deserunt vitae unde eos ipsum, quam tenetur quis voluptates magnam error cumque autem labore dignissimos nam magni velit. Facilis, id temporibus!
        Iure, neque! Sequi ab repellat minus itaque delectus vitae et non nesciunt! Nisi quam ducimus eum temporibus expedita. Similique aliquam accusamus mollitia necessitatibus modi a nostrum nobis. Quisquam, vero minus.`,
      image:
        "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fgratisography-funflower-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=5RFroDSkyf1y6M&vet=12ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA..i&w=800&h=525&hcb=2&itg=1&ved=2ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA",
    },
    {
      id: 2,
      name: "John Doe",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officia excepturi laudantium nobis illum ipsum ad ullam impedit iste, vitae dolor pariatur aliquam, tempore voluptas sint fugit soluta maxime inventore!
            Fugiat officia, molestias quo, est placeat debitis perferendis ipsam tempora excepturi tenetur explicabo omnis quae reprehenderit ad eum necessitatibus incidunt illo vitae nesciunt recusandae? Soluta iste ratione optio repellat nam?
            Consectetur nostrum dignissimos eaque officia. Laudantium aut in vel! Magnam perferendis deserunt, sunt aut quibusdam, accusantium culpa ea magni ducimus tempora harum molestias quisquam, saepe mollitia nobis odit fuga sint.
            Excepturi optio omnis tempore cum cupiditate at aspernatur delectus deserunt vitae unde eos ipsum, quam tenetur quis voluptates magnam error cumque autem labore dignissimos nam magni velit. Facilis, id temporibus!
            Iure, neque! Sequi ab repellat minus itaque delectus vitae et non nesciunt! Nisi quam ducimus eum temporibus expedita. Similique aliquam accusamus mollitia necessitatibus modi a nostrum nobis. Quisquam, vero minus.`,
      image:
        "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fgratisography-funflower-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=5RFroDSkyf1y6M&vet=12ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA..i&w=800&h=525&hcb=2&itg=1&ved=2ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA",
    },
    {
      id: 3,
      name: "John Doe",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officia excepturi laudantium nobis illum ipsum ad ullam impedit iste, vitae dolor pariatur aliquam, tempore voluptas sint fugit soluta maxime inventore!
        Fugiat officia, molestias quo, est placeat debitis perferendis ipsam tempora excepturi tenetur explicabo omnis quae reprehenderit ad eum necessitatibus incidunt illo vitae nesciunt recusandae? Soluta iste ratione optio repellat nam?
        Consectetur nostrum dignissimos eaque officia. Laudantium aut in vel! Magnam perferendis deserunt, sunt aut quibusdam, accusantium culpa ea magni ducimus tempora harum molestias quisquam, saepe mollitia nobis odit fuga sint.
        Excepturi optio omnis tempore cum cupiditate at aspernatur delectus deserunt vitae unde eos ipsum, quam tenetur quis voluptates magnam error cumque autem labore dignissimos nam magni velit. Facilis, id temporibus!
        Iure, neque! Sequi ab repellat minus itaque delectus vitae et non nesciunt! Nisi quam ducimus eum temporibus expedita. Similique aliquam accusamus mollitia necessitatibus modi a nostrum nobis. Quisquam, vero minus.`,
      image:
        "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fgratisography-funflower-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=5RFroDSkyf1y6M&vet=12ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA..i&w=800&h=525&hcb=2&itg=1&ved=2ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA",
    },
    {
      id: 4,
      name: "John Doe",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officia excepturi laudantium nobis illum ipsum ad ullam impedit iste, vitae dolor pariatur aliquam, tempore voluptas sint fugit soluta maxime inventore!
        Fugiat officia, molestias quo, est placeat debitis perferendis ipsam tempora excepturi tenetur explicabo omnis quae reprehenderit ad eum necessitatibus incidunt illo vitae nesciunt recusandae? Soluta iste ratione optio repellat nam?
        Consectetur nostrum dignissimos eaque officia. Laudantium aut in vel! Magnam perferendis deserunt, sunt aut quibusdam, accusantium culpa ea magni ducimus tempora harum molestias quisquam, saepe mollitia nobis odit fuga sint.
        Excepturi optio omnis tempore cum cupiditate at aspernatur delectus deserunt vitae unde eos ipsum, quam tenetur quis voluptates magnam error cumque autem labore dignissimos nam magni velit. Facilis, id temporibus!
        Iure, neque! Sequi ab repellat minus itaque delectus vitae et non nesciunt! Nisi quam ducimus eum temporibus expedita. Similique aliquam accusamus mollitia necessitatibus modi a nostrum nobis. Quisquam, vero minus.`,
      image:
        "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fgratisography-funflower-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=5RFroDSkyf1y6M&vet=12ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA..i&w=800&h=525&hcb=2&itg=1&ved=2ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA",
    },
    {
      id: 5,
      name: "John Doe",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officia excepturi laudantium nobis illum ipsum ad ullam impedit iste, vitae dolor pariatur aliquam, tempore voluptas sint fugit soluta maxime inventore!
        Fugiat officia, molestias quo, est placeat debitis perferendis ipsam tempora excepturi tenetur explicabo omnis quae reprehenderit ad eum necessitatibus incidunt illo vitae nesciunt recusandae? Soluta iste ratione optio repellat nam?
        Consectetur nostrum dignissimos eaque officia. Laudantium aut in vel! Magnam perferendis deserunt, sunt aut quibusdam, accusantium culpa ea magni ducimus tempora harum molestias quisquam, saepe mollitia nobis odit fuga sint.
        Excepturi optio omnis tempore cum cupiditate at aspernatur delectus deserunt vitae unde eos ipsum, quam tenetur quis voluptates magnam error cumque autem labore dignissimos nam magni velit. Facilis, id temporibus!
        Iure, neque! Sequi ab repellat minus itaque delectus vitae et non nesciunt! Nisi quam ducimus eum temporibus expedita. Similique aliquam accusamus mollitia necessitatibus modi a nostrum nobis. Quisquam, vero minus.`,
      image:
        "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fgratisography-funflower-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=5RFroDSkyf1y6M&vet=12ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA..i&w=800&h=525&hcb=2&itg=1&ved=2ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA",
    },
    {
      id: 6,
      name: "John Doe",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officia excepturi laudantium nobis illum ipsum ad ullam impedit iste, vitae dolor pariatur aliquam, tempore voluptas sint fugit soluta maxime inventore!
        Fugiat officia, molestias quo, est placeat debitis perferendis ipsam tempora excepturi tenetur explicabo omnis quae reprehenderit ad eum necessitatibus incidunt illo vitae nesciunt recusandae? Soluta iste ratione optio repellat nam?
        Consectetur nostrum dignissimos eaque officia. Laudantium aut in vel! Magnam perferendis deserunt, sunt aut quibusdam, accusantium culpa ea magni ducimus tempora harum molestias quisquam, saepe mollitia nobis odit fuga sint.
        Excepturi optio omnis tempore cum cupiditate at aspernatur delectus deserunt vitae unde eos ipsum, quam tenetur quis voluptates magnam error cumque autem labore dignissimos nam magni velit. Facilis, id temporibus!
        Iure, neque! Sequi ab repellat minus itaque delectus vitae et non nesciunt! Nisi quam ducimus eum temporibus expedita. Similique aliquam accusamus mollitia necessitatibus modi a nostrum nobis. Quisquam, vero minus.`,
      image:
        "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fgratisography-funflower-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=5RFroDSkyf1y6M&vet=12ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA..i&w=800&h=525&hcb=2&itg=1&ved=2ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA",
    },
    {
      id: 7,
      name: "John Doe",
      review: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores officia excepturi laudantium nobis illum ipsum ad ullam impedit iste, vitae dolor pariatur aliquam, tempore voluptas sint fugit soluta maxime inventore!
        Fugiat officia, molestias quo, est placeat debitis perferendis ipsam tempora excepturi tenetur explicabo omnis quae reprehenderit ad eum necessitatibus incidunt illo vitae nesciunt recusandae? Soluta iste ratione optio repellat nam?
        Consectetur nostrum dignissimos eaque officia. Laudantium aut in vel! Magnam perferendis deserunt, sunt aut quibusdam, accusantium culpa ea magni ducimus tempora harum molestias quisquam, saepe mollitia nobis odit fuga sint.
        Excepturi optio omnis tempore cum cupiditate at aspernatur delectus deserunt vitae unde eos ipsum, quam tenetur quis voluptates magnam error cumque autem labore dignissimos nam magni velit. Facilis, id temporibus!
        Iure, neque! Sequi ab repellat minus itaque delectus vitae et non nesciunt! Nisi quam ducimus eum temporibus expedita. Similique aliquam accusamus mollitia necessitatibus modi a nostrum nobis. Quisquam, vero minus.`,
      image:
        "https://www.google.com/imgres?q=image&imgurl=https%3A%2F%2Fgratisography.com%2Fwp-content%2Fuploads%2F2024%2F03%2Fgratisography-funflower-800x525.jpg&imgrefurl=https%3A%2F%2Fgratisography.com%2F&docid=YAe2I9AqIHgndM&tbnid=5RFroDSkyf1y6M&vet=12ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA..i&w=800&h=525&hcb=2&itg=1&ved=2ahUKEwjevM2t9eeIAxXFwjgGHQo7MU0QM3oECBkQAA",
    },
  ];

  const role = useSelector((state) => state.user.role);

  return (
    <div className="min-h-screen">
      <TitleBar />
      <div
        className={`typo h-[80vh] flex items-center justify-center border m-20 ${
          role === "admin" ? "bg-primary" : "bg-base-content"
        } text-base-300`}
      >
        Fam Fusion
      </div>
      <Facts />
      <SectionWithImage
        title="About Us"
        paragraphs={[
          `Fam Fusion is dedicated to building meaningful connections between
              families and individuals through innovative solutions. Our mission
              is to simplify and streamline processes to create a supportive and
              inclusive environment. We believe in fostering a sense of
              community and belonging for everyone we serve.`,
          `Our platform is built on principles of transparency, inclusivity,
              and collaboration. Whether you're seeking support, resources, or a
              community to call your own, Fam Fusion is here to help. We take
              pride in fostering a safe and supportive environment where
              relationships can thrive, and dreams can take flight.`,
          `By prioritizing user satisfaction and feedback, we continuously
              refine our offerings to ensure an exceptional experience for every
              visitor. Join us on this journey of growth and discovery, as we
              work together to build a brighter, more connected future.`,
        ]}
        imgSrc="https://via.placeholder.com/320"
      />
      <SectionWithImage
        title="Our Vision"
        paragraphs={[
          `At Fam Fusion, we envision a world where technology bridges gaps
              and builds stronger, more resilient communities. Our goal is to
              empower individuals and families by providing them with tools that
              prioritize transparency, accessibility, and innovation. Together,
              we aim to shape a future where every connection made leads to a
              positive and lasting impact.`,
          ` We believe in a future where every individual feels seen, heard,
              and valued. Our commitment to excellence drives us to constantly
              innovate and improve our services, ensuring that we stay ahead of
              the curve and deliver lasting value to our users.`,
          `Together, we can build a world where technology serves as a
              catalyst for positive change, strengthening communities and
              inspiring generations to come.`,
        ]}
        imageSrc="https://via.placeholder.com/320"
        reverse
      />
      <SectionWithImage
        title="How Things Are Done Inside Fam Fusion"
        paragraphs={[
          `Fam Fusion employs cutting-edge technology and a user-centric
              approach to ensure smooth and efficient operations. From
              personalized user interfaces to robust backend support, we
              prioritize user satisfaction and data security.`,
          `From seamless navigation to robust backend systems, we prioritize
              functionality and security at every step. Our platform is built
              with scalability in mind, allowing us to adapt to the evolving
              demands of our users. Every enhancement is aimed at improving the
              overall experience and providing value to our community.`,
          `Collaboration lies at the heart of everything we do. By fostering
              partnerships with like-minded organizations and individuals, we
              amplify our impact and create a network of support for those who
              need it most.`,
        ]}
        imgSrc="https://via.placeholder.com/320"
      />
      <div className="comments-title min-h-[20vh] max-w-[80vw] mx-auto z-0 text-[11rem]">
        <h1 className="text-center">Hear From Our Satisfied Users</h1>
      </div>
      <div className="review-section">
        <div className="reviews">
          {DEMO_LIST.map((item) => (
            <div
              className="card bg-accent text-secondary-content"
              id={item.id}
              key={item.id}
              style={{ "--pos": item.id - 1 }}
            >
              <div className="profile-pic h-[10rem] w-[10rem] ">
                <img
                  src="https://via.placeholder.com/160"
                  className="rounded-badge"
                />
              </div>
              <h2 className="text-2xl">{item.name}</h2>
              <p>{item.review}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="last-section h-[75vh] p-8 z-50">
        <h1 className="text-left text-[6rem]">Connect with us</h1>
        <div className="connect-form bg-accent mx-16 h-[70vh] mt-16 rounded-t-[8rem]"></div>
      </div>
    </div>
  );
}

export default Home;
