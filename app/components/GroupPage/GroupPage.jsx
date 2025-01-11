"use client";
import { Card } from "..";

const cards = [
  {
    id: 1,
    title: "AGES 2-5",
    description:
      "Tiny Explorers Gazette: Discovering the wonders of the World for the Little Ones!",
    classes: "bg-orange-400",
  },
  {
    id: 2,
    title: "AGES 6-12",
    description:
      "Tiny Explorers Gazette: Discovering the wonders of the World for the Little Ones!",
    classes: "bg-purple-800",
  },
  {
    id: 3,
    title: "AGES 13-19",
    description:
      "Tiny Explorers Gazette: Discovering the wonders of the World for the Little Ones!",
    classes: "bg-orange-400",
  },
  {
    id: 4,
    title: "AGES 20+",
    description:
      "Tiny Explorers Gazette: Discovering the wonders of the World for the Little Ones!",
    classes: "bg-purple-800",
  },
  {
    id: 5,
    title: "PARENTS & carers",
    description:
      "Tiny Explorers Gazette: Discovering the wonders of the World for the Little Ones!",
    classes: "bg-orange-400",
  },
  {
    id: 6,
    title: "AGES 25+",
    description:
      "Tiny Explorers Gazette: Discovering the wonders of the World for the Little Ones!",
    classes: "bg-orange-400",
  },
];

const CardsWithHeading = ({ title, cards }) => {
  return (
    <div className="mb-16">
      {title && <h1 className="text-4xl font-bold mb-4">{title}</h1>}
      <div className="flex flex-wrap gap-16">
        {cards.map(({ id, title, description, classes }) => (
          <Card
            key={id}
            classNames={classes}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export const GroupPage = () => {
  return (
    <div className="col-span-9 ">
      <CardsWithHeading cards={cards} />
      <CardsWithHeading title="Specialized Roles" cards={cards.slice(3)} />
      <CardsWithHeading title="Hobbies and Creativity" cards={cards.slice(4)} />
      <CardsWithHeading title="Wellness and Support" cards={cards.slice(3)} />
    </div>
  );
};
