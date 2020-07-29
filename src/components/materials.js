import React from "react";

export default function materials(props) {
  const { materials, description } = props;
  return (
    <div className="description-field">
      <h5>Description</h5>
      {description}
      <br />
      <br />
      <h5>Materials:</h5>
      {materials.map((el, id) => {
        if (id % 2 === 0) {
          return (
            <p key={id} className="material">
              {el} ------------------ {materials[id + 1]}%
            </p>
          );
        }
      })}
    </div>
  );
}
