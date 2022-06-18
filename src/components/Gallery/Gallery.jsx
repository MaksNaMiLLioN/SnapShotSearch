import React from "react";
import "./gallery.css";
import Card from "../card/Card";
import NotFound from "../notFound/NotFound";

const Gallery = ({ dataImg }) => {
  return (
    <div className="container">
      <div className="gallery_cards">
        {dataImg.length > 0 ? (
          dataImg.map((image) => {
            let farm = image.farm;
            let server = image.server;
            let id = image.id;
            let secret = image.secret;
            let title = image.title;
            let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
            return <Card url={url} key={id} alt={title} />;
          })
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
};

export default Gallery;
