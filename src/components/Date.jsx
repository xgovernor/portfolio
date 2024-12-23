import { useEffect, useState } from "react";

export default function DateFormat({ dateString }) {
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    if (dateString) {
      const date = new Date(dateString);
      if (!isNaN(date)) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formatted = date.toLocaleDateString(undefined, options);
        setFormattedDate(formatted);
      } else {
        setFormattedDate("No date");
      }
    } else {
      setFormattedDate("No date");
    }
  }, [dateString]);

  return <time dateTime={dateString}>{formattedDate || "No date"}</time>;
}
