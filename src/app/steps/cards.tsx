import { JSX } from "react";
import "./card.css";



interface CardProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

export function Card({ title, description, icon }: CardProps) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}
