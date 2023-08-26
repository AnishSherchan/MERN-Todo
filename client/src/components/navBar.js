import React from "react";

const NavBar = () => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Array of day names
  const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  // Get the month and day from the current date
  const month = monthNames[currentDate.getMonth()];
  const day = dayNames[currentDate.getDay()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  return (
    <div>
      <div className="flex flex-wrap justify-between">
        <div className=" flex items-center gap-2">
          <div>
            <p className=" font-bold text-4xl opacity-70">{date}</p>
          </div>
          <div>
            <p className=" text-xs font-semibold opacity-80">{month}</p>
            <p className=" text-xs font-semibold opacity-70">{year}</p>
          </div>
        </div>
        <p className=" text-xl font-semibold opacity-70">{day}</p>
      </div>
    </div>
  );
};

export default NavBar;
