import { Carousel } from "antd";
const contentStyle = {
  width: "50%",
  margin: "0 auto",
  marginTop: "60px",
  textAlign: "center",
  height: "260px",
  color: "#222",
  lineHeight: "25px",
  textAlign: "center",
  background: "#fff",
};

const bazaCarusel = [
  {
    id: 1,
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde   laborum,dolores impedit, quas, corrupti odio similique magnam totam dignissimos optio nihil ipsa! Rerum quasi quisquam iure possimus? Sed, repellendus. Earum.",
  },
  {
    id: 2,
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde  laborum,dolores impedit, quas, corrupti odio similique magnam totam dignissimos optio nihil ipsa! Rerum quasi quisquam iure possimus? Sed, repellendus. Earum.",
  },
  {
    id: 3,
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde  laborum,dolores impedit, quas, corrupti odio similique magnam totam dignissimos optio nihil ipsa! Rerum quasi quisquam iure possimus? Sed, repellendus. Earum.",
  },
  {
    id: 4,
    text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde  laborum,dolores impedit, quas, corrupti odio similique magnam totam dignissimos optio nihil ipsa! Rerum quasi quisquam iure possimus? Sed, repellendus. Earum.",
  },
];

const Carusel = () => (
  <Carousel autoplay="true">
    {bazaCarusel.map((obj) => {
      return (
        <div key={obj.id}>
          <h4 style={contentStyle} id={obj.id}>
            {obj.id} {obj.text}
          </h4>
        </div>
      );
    })}
  </Carousel>
);

export default Carusel;
