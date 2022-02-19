import "./styles.css";
import QuantityPicker from "./components/QuantityPicker";
import { useState } from "react";

export default function App() {
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const total = adults + children;

  const addRooms = () => {
    if (rooms < 5) {
      setRooms((prevState) => prevState + 1);
      if (adults < rooms + 1) {
        setAdults((prevState) => prevState + 1);
      }
    }
  };
  const removeRooms = () => {
    if (rooms > 1) {
      setRooms((prevState) => prevState - 1);
    }
  };
  const addAdults = () => {
    if (total < rooms * 4) {
      setAdults((prevState) => prevState + 1);
    }
  };
  const removeAdults = () => {
    if (adults > rooms) {
      setAdults((prevState) => prevState - 1);
    }
  };
  const addChildren = () => {
    if (total < rooms * 4) {
      setChildren((prevState) => prevState + 1);
    }
  };
  const removeChildren = () => {
    if (total <= rooms * 4) {
      setChildren((prevState) => prevState - 1);
    }
  };

  const isRemoveRoomDisabled = total > (rooms - 1) * 4 || rooms === 1;
  const isRemoveAdultsDisabled = adults === 1 || adults <= rooms;

  return (
    <div className="App">
      <h3 className="page-title">
        <img
          className="icon"
          src="https://media.istockphoto.com/vectors/people-icon-in-flat-style-group-of-people-symbol-for-your-web-site-vector-id1136653100?k=20&m=1136653100&s=170667a&w=0&h=ExivHgBvO-2xTO10MaXx7gP7mqEBNUpa-ov9hN_nBaY="
          alt="people icon"
        />
        Choose number of people
      </h3>
      <div className="picker-wrapper">
        <QuantityPicker
          logo="https://cdn-icons-png.flaticon.com/128/3030/3030336.png"
          title="ROOMS"
          addFunction={addRooms}
          removeFunction={removeRooms}
          disableAdd={rooms === 5}
          disableRemove={isRemoveRoomDisabled}
          count={rooms}
        />
        <QuantityPicker
          logo="https://static.thenounproject.com/png/111139-200.png"
          title="ADULTS"
          addFunction={addAdults}
          removeFunction={removeAdults}
          disableAdd={total === rooms * 4}
          disableRemove={isRemoveAdultsDisabled}
          count={adults}
        />
        <QuantityPicker
          logo="https://media.istockphoto.com/vectors/children-icon-vector-id1178790725?k=20&m=1178790725&s=612x612&w=0&h=-tisrpEj0T2aS90eNVo4x0ZjLyDeaMR8q5Pd7sCc7BM="
          title="CHILDREN"
          addFunction={addChildren}
          removeFunction={removeChildren}
          disableAdd={total === rooms * 4}
          disableRemove={children === 0}
          count={children}
        />
      </div>
    </div>
  );
}
