import React from "react";

const certis = [
  {
    name: "AWS",
    image: "/certi.png",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam, eveniet voluptate iure magni officiis excepturi nemo sit facilis nobis cum impedit asperiores. Sint qui quasi placeat eos unde ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et exercitationem iusto officia dolor? Sequi odit, praesentium nemo quo ex saepe magni, eius obcaecati rerum facilis corrupti nulla vitae quibusdam adipisci? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat explicabo, laudantium, numquam optio illo cum quibusdam et omnis neque maxime, inventore alias facere eaque hic dignissimos dolorum beatae tempora id.",
  },
  {
    name: "AWS",
    image: "/certi.png",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam, eveniet voluptate iure magni officiis excepturi nemo sit facilis nobis cum impedit asperiores. Sint qui quasi placeat eos unde ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et exercitationem iusto officia dolor? Sequi odit, praesentium nemo quo ex saepe magni, eius obcaecati rerum facilis corrupti nulla vitae quibusdam adipisci? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat explicabo, laudantium, numquam optio illo cum quibusdam et omnis neque maxime, inventore alias facere eaque hic dignissimos dolorum beatae tempora id.",
  },
  {
    name: "AWS",
    image: "/certi.png",
    discription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam, eveniet voluptate iure magni officiis excepturi nemo sit facilis nobis cum impedit asperiores. Sint qui quasi placeat eos unde ipsum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et exercitationem iusto officia dolor? Sequi odit, praesentium nemo quo ex saepe magni, eius obcaecati rerum facilis corrupti nulla vitae quibusdam adipisci? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat explicabo, laudantium, numquam optio illo cum quibusdam et omnis neque maxime, inventore alias facere eaque hic dignissimos dolorum beatae tempora id.",
  },
];

const CertificateCard = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      {certis.map((certi) => {
        return (
          <>
            <div className="flex flex-row items-center w-[90%] my-[4rem] h-[20em] shadow-xl rounded-xl">
              <div className="h-[100%] w-[30%] relative">
                <span className=" absolute bg-secondary md:h-[3em] h-[2em] w-[100%] lg:rounded-tl-xl lg:rounded-tr-none rounded-t-xl"></span>
                <img
                  src={certi.image}
                  className=" h-[17em] w-[100%] object-cover"
                />
                <span className=" absolute bg-secondary md:h-[3em] h-[2em] w-[100%] lg:rounded-bl-xl"></span>
              </div>
              <div className="h-full w-[50%] mx-[10%] flex flex-col justify-evenly items-center">
                <div className="flex items-center">
                  <span className="h-[0.5rem] w-[2rem] bg-secondary rounded-[3px] shadow-[0_0_0.5rem_#71EAC6] mr-6 "></span>
                  <h1 className="xl:text-[1.5rem] md:text-[1.25rem] sm:text-[1rem] text-[1rem] text-border tracking-[0.4rem] uppercase">
                    {certi.name}
                  </h1>
                </div>
                <p>{certi.discription}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CertificateCard;
