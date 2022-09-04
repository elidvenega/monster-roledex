import { Component } from "react";
import CardComponent from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster;
          return (
            <div className="card-container" key={id}>
              <CardComponent 
              propsID={id} 
              propsEmail={email} 
              propsName={name}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
