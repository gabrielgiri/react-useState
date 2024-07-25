import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FaStar } from 'react-icons/fa';
import CarComponent from './components/CarComponent';

function App() {

  const [count, setCount] = useState(0);
  const [bar, setBar] = useState(30);
  const [star, setStar] = useState(0);
  const [r, setR] = useState(255);
  const [g, setG] = useState(0);
  const [b, setB] = useState(30);

  const Done = () => {
    if (bar === 100) {
      return (
        <h3 style={{ color: `rgb(${r}, ${g}, ${b})` }}>Full Battery</h3>
      )
    }
    if (bar < 30) {
      return (
        <h3 style={{ color: `rgb(${r}, ${g}, ${b})` }}>Low Battery</h3>
      )
    }
  }

  const Valorant = () => {
    return (
      <div>
        <FaStar className={`star ${(star > 0) ? "myFeatured" : "myIcon"}`} />
        <FaStar className={`star ${(star > 1) ? "myFeatured" : "myIcon"}`} />
        <FaStar className={`star ${(star > 2) ? "myFeatured" : "myIcon"}`} />
        <FaStar className={`star ${(star > 3) ? "myFeatured" : "myIcon"}`} />
        <FaStar className={`star ${(star > 4) ? "myFeatured" : "myIcon"}`} />

        <Button
          className="btn m-2"
          size="sm"
          onClick={() => {
            if (star > 0) {
              setStar(star - 1)
            }
          }}>
          -
      </Button>
        <Button
          className="btn m-1"
          size="sm"
          onClick={() => {
            if (star < 5) {
              setStar(star + 1)
            }
          }
          }>
          +
      </Button>
        <span className="m-2 color: red">{`${(star > 4) ? "Good job!" : ""}`}</span>

      </div>
    )
  }

  return (
    <div className="container p-5">
      <div className="row">
        <h1>Basic Hooks</h1>
        <h2>useState</h2>
        <div className="col pt-3">
          <Button
            className="btn m-1"
            size="lg"
            onClick={() => {
              if (bar > 24) {
                setCount(count + 1)
                setBar(bar - 2)
                setR(r + 5)
                setG(g - 6)
                setB(b - 2)
              }
            }}>
            -
      </Button>
          <Button
            className="btn m-1"
            size="lg"
            onClick={() => {
              if (bar < 100) {
                setCount(count + 1)
                setBar(bar + 2)
                setR(r - 5)
                setG(g + 6)
                setB(b + 2)
              }
            }
            }>
            +
      </Button>

          <h4 className="mt-3">You clicked {count} times</h4>
          <div class="bar" style={{
            backgroundColor: `rgb(${r}, ${g}, ${b})`,
            width: `${bar}%`
          }}>Progress Bar<span>{bar}%</span></div>
          <Done />
        </div>
        <div className="col py-3">
        <CarComponent />
        <CarComponent />
        </div>
        <div className="col pt-3">
          <div class="row mt-4 bg-light p-2">
            <Valorant />
            <Valorant />
            <Valorant />
            <Valorant />
            <Valorant />
            <Valorant />
            <Valorant />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
