import React, { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Loader from "rsuite/Loader";
import "rsuite/Loader/styles/index.css";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/cart";

export default function Home() {
  let userUrl = "https://dummyjson.com/products";
  const [phoneList, setPhoneList] = useState([]);
  const [searchField, setSearchField] = useState("");
  
  const fetchPhoneList = async () => {
    try {
      let result = await axios.get(userUrl);
      setPhoneList(result.data.products);
      // setCount(result.data.products.length);
    } catch (err) {
      console.log("Something went wrong...");
    }
  };
  let selector = useSelector((state) => state.cartItem);
  let dispatch = useDispatch();

  const buyItem = () => {
    dispatch(addItem(""));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Congratulations.... You bought a mobile.",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      fetchPhoneList();
    }, 1000);
  }, []);

  return (
    <>
      <h3>User Devices</h3>
      <div className="input">
        <h4>Cart Items : {selector.length}</h4>
        <input
          type="text"
          placeholder="Search"
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        />
      </div>

      <div className="home-content">
        {phoneList?.length > 0 ? (
          phoneList?.length > 0 &&
          phoneList
            .filter(
              (x) =>
                x.title.toLowerCase().indexOf(searchField.toLowerCase()) > -1 ||
                x.description.toLowerCase().indexOf(searchField.toLowerCase()) >
                  -1 ||
                x.stock
                  .toString()
                  .toLowerCase()
                  .indexOf(searchField.toLowerCase()) > -1
            )
            .map((item, index) => {
              return (
                <Card key={index} className="cars">
                  <Card.Img
                    variant="top"
                    src={item.images[0]}
                    alt="No Image"
                    className="ig"
                  />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="desc">{item.description}</Card.Text>
                    <Card.Text>Avilable : {item.stock}</Card.Text>
                    <Button variant="success" onClick={() => buyItem()}>
                      Buy Now
                    </Button>
                  </Card.Body>
                </Card>
              );
            })
        ) : (
          <p>
            <Loader />
          </p>
        )}
      </div>
    </>
  );
}
