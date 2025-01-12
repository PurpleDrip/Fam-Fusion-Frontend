import React from "react";
import { useParams } from "react-router-dom";
import TitleBar from "../Components/TitleBar";

const Profile = () => {
  const { id } = useParams();
  return (
    <>
      <TitleBar />
      <div className=" h-[90vh] flex">
        <div className="w-1/3 flex items-center justify-center flex-col">
          <img
            src="https://via.placeholder.com/400"
            alt="{title}"
            className="z-0 rounded-full bg-white w-[30rem] mb-8"
          />
          <h1 className="text-2xl">Name</h1>
          <h2>Age</h2>
          <h2>From</h2>
        </div>
        <div className="flex w-2/3 p-20 flex-col">
          <h1 className="text-3xl mb-4 text-primary">
            Organization Name-{" "}
            <span className="text-base-content">Panther</span>
          </h1>
          <h2 className="text-xl mb-8 text-primary">
            Organization Address-
            <span className="text-base-content"> Address</span>
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis ullam repellendus facilis quisquam deserunt impedit
            totam consequuntur dignissimos cumque laudantium, excepturi nulla
            dolorem sequi enim quis autem rerum nemo beatae. Nostrum eligendi
            iusto totam repellat incidunt accusamus illo perspiciatis, provident
            reiciendis eaque in, qui quidem quis fugit tempora omnis aspernatur,
            alias possimus mollitia impedit voluptate. Et esse sapiente
            accusamus veniam. Eveniet quia provident ut accusamus eligendi.
            Natus quod voluptate impedit commodi dolores ex autem. Natus,
            inventore magni voluptatibus aliquam tempora, minima corrupti ut
            repudiandae delectus cum vitae unde voluptates corporis. Beatae
            accusantium, voluptatum nihil quis voluptas sequi? Nam optio
            quibusdam autem quasi, consectetur similique dignissimos culpa
            impedit commodi perferendis reiciendis provident non fugiat ratione
            alias iure? Nulla voluptatem dolore cupiditate! Vero in vel quae
            totam labore voluptatibus veritatis voluptatem unde harum voluptas
            ratione dolorem ipsa magnam explicabo, dignissimos optio asperiores
            iure expedita? Odit vel perferendis consequuntur ea officiis ratione
            quis! Praesentium ad, quis, asperiores necessitatibus quos, neque
            autem natus ipsum aspernatur eos dignissimos aliquid debitis
            perspiciatis nostrum nobis velit. Inventore temporibus veniam odit
          </p>
          <div className="my-20 flex gap-4 mx-auto">
            <button className="btn btn-secondary btn-wide btn-outline">
              Message
            </button>
            <button className="btn btn-secondary btn-wide btn-outline">
              Voice Call
            </button>
            <button className="btn btn-secondary btn-wide btn-outline">
              Video Call
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
