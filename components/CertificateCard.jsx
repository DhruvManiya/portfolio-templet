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
            <div className="flex xl:flex-row flex-col items-center xl:w-[90%] w-[100%] my-[4rem] xl:h-[20em] h-fit shadow-xl rounded-xl" key={certi.name}>
              <div className="md:h-[100%] h-fit xl:w-[30%] w-[100%] relative">
                <span className=" absolute bg-secondary md:h-[3em] h-[2em] w-[100%] xl:rounded-tl-xl xl:rounded-tr-none rounded-t-xl"></span>
                <img
                  src={certi.image}
                  className=" xl:h-[17em] h-fit w-[100%] object-cover"
                />
                <span className=" absolute bg-secondary md:h-[3em] h-[2em] w-[100%] xl:rounded-bl-xl"></span>
              </div>
              <div className="h-full xl:w-[50%] w-[80%] xl:my-0 xl:pt-0 pt-[2rem] my-[2.5rem] xl:mx-[10%] flex flex-col justify-evenly items-center">
                <div className="flex items-center xl:pb-0 pb-4">
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
