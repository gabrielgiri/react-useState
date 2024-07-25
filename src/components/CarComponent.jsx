import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { FaCar } from 'react-icons/fa';

const CarComponent = () => {
  const [colorCar, setColorCar] = useState("black");

  const ChangeColor = ({ color }) => {
    return (
      <div>
        <Button
          className="btn m-1"
          onClick={() => setColorCar('red')}
          size="sm">
          set to red{color}
        </Button>

        <Button
          className="btn m-1"
          onClick={() => setColorCar('blue')}
          size="sm">
          set to blue{color}
        </Button>

        <Button
          className="btn m-1"
          onClick={() => setColorCar('green')}
          size="sm">
          set to green{color}
        </Button>
      </div>
    )
  }

  return (
    <div className="mb-3">
      <FaCar className={`car ${colorCar}`} /> The car is {colorCar}
      <ChangeColor />
    </div>
  );
}

export default CarComponent;
