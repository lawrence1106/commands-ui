import "./App.css";
import Instascan from "instascan";
import { useState } from "react";
import axios from "axios";
import { Button, ButtonGroup, Card } from "@material-ui/core";
import BookingForm from "./components/Book";

function App() {
  const [activeUser, setActiveUser] = useState({ id: 0, name: "Name" });
  const Login = (id) => {
    axios
      .get("https://hst-api.atsuae.net/leaseplan/user", {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        params: { user: id },
      })
      .then((results) => {
        let data = results.data;
        if (data[0]?.name) {
          setActiveUser({ id: data[0].id, name: data[0].name });
        }
      });
  };

  let scan = async () => {
    const scanner = new Instascan.Scanner({
      video: document.getElementById("preview"),
    });
    scanner.addListener("scan", function (content) {
      console.log(content);
    });
    Instascan.Camera.getCameras()
      .then(function (cameras) {
        if (cameras.length > 0) {
          scanner.start(cameras[0]);
        } else {
          console.error("No cameras found.");
        }
      })
      .catch(function (e) {
        console.error(e);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Card>
          {/* USER */}
          <Card>
            <h1>{activeUser.name || "Please Log-in a User"}</h1>
            <ButtonGroup
              variant="text"
              color="primary"
              aria-label="text primary button group"
            >
              <Button
                onClick={() => {
                  Login(1);
                }}
                variant="contained"
                color="primary"
              >
                Login User 1
              </Button>
              <Button
                onClick={() => {
                  Login(2);
                }}
                variant="contained"
                color="primary"
              >
                Login User 2
              </Button>
            </ButtonGroup>
          </Card>
          {/* USER */}
          <video id="preview"></video>
          <Button
            onClick={() => {
              scan();
            }}
            variant="contained"
            color="primary"
          >
            Check Camera
          </Button>
        </Card>
      </header>
      <BookingForm activeUser={activeUser} />
    </div>
  );
}

export default App;
