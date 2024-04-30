import React, { useState, useEffect } from "react";
import "./home.css";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Loader from "rsuite/Loader";
import "rsuite/Loader/styles/index.css";

export default function Home() {
  let userUrl = "https://dummyjson.com/products";
  const [phoneList, setPhoneList] = useState([]);
  const fetchPhoneList = async () => {
    try {
      let result = await axios.get(userUrl);
      setPhoneList(result.data.products);
    } catch (err) {
      console.log("Something went wrong...");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchPhoneList();
    }, 1000);
  }, []);

  return (
    <>
      <h3>User Devices</h3>
      <div className="home-content">
        {phoneList?.length > 0 ? (
          phoneList?.length > 0 &&
          phoneList.map((item, index) => {
            return (
              <Card                
                key={index}
                className="cars"
              >
                <Card.Img
                  variant="top"
                  src={item.images[0]}
                  alt="No Image"
                  className="ig"
                />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text className="desc">{item.description}</Card.Text>
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
