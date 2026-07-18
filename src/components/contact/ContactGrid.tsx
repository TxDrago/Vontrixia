"use client";

import ContactCard from "./ContactCard";
import { ContactItem } from "@/data/contact";

interface ContactGridProps {
  items: ContactItem[];
}

const ContactGrid = ({ items }: ContactGridProps) => {
  return (
    <div
      className="
        grid
        gap-6
        sm:grid-cols-2
        xl:grid-cols-4
      "
    >
      {items.map((item) => (
        <ContactCard
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default ContactGrid;