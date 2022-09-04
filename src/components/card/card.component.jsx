import { Component } from "react";

class CardComponent extends Component {
  render({propsName, propsID, propsEmail}) {
    return (
      <div>
        <img
          alt={`monster ${propsName}`}
          src={`https://robohash.org/${propsID}?set=set2&180x180`}
        />
        <h2>{propsName}</h2>
        <p>{propsEmail}</p>
      </div>
    );
  }
}

export default CardComponent;
