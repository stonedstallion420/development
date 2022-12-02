import Button from "react-bootstrap/Button";
import { ROAST_LABELS, SIZE_LABELS } from "../data";

const Pod = (props) => {
  return (
    <div className="pod-item">
      <div>
        <img src={props.image} className="pod-image"></img>
      </div>
      <div className="pod-info">
        <p className="pod-name">{props.name}</p>
        <p className="pod-size">{SIZE_LABELS[props.size]}</p>
        <p className="pod-intensity">Intensity: {props.intensity}</p>
        <p className="pod-roast">{ROAST_LABELS[props.roast]} roast</p>
        <p className="pod-price">${props.price} / capsule</p>
        <Button
          variant="primary"
          onClick={() => props.setIsFavorite(!props.isFavorite)}
        >
          {props.isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </Button>
      </div>
    </div>
  );
};

export default Pod;
