import React from "react";
import { Lista } from "./TiposTratamento";
import treatmentTypes from "./treatmentTypes.json";

export default function ListaDeTratamentos() {
  return (
    <Lista>
      {treatmentTypes.map((type) => (
        <li key={type.name}>{type.name}</li>
      ))}
    </Lista>
  );
}
