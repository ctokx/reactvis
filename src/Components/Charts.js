import React, { useState } from "react";
import "./Charts.css";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
} from "chart.js";
import { RadialLinearScale, Filler } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const [inputamount, setinputamount] = useState([]);
  const [inputamount2, setinputamount2] = useState([]);

  const handleAdd = () => {
    const abc = [...inputamount, [2]];
    setinputamount(abc);
    const abc2 = [...inputamount2, [2]];
    setinputamount2(abc2);
  };

  const handleChange = (onChangeValue, i) => {
    const inputdata = [...inputamount];
    inputdata[i] = onChangeValue.target.value;
    setinputamount(inputdata);
  };
  const handleChange2 = (onChangeValue, i) => {
    const inputdata = [...inputamount2];
    inputdata[i] = onChangeValue.target.value;
    setinputamount2(inputdata);
  };
  const [charttype, setcharttype] = useState("Single Line Line Chart");
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  const labels = [...inputamount];

  const options2 = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart - Multi Axis",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  const [chartTyp, setchartTyp] = useState("");

  const setTypeFunction = (e) => {
    setchartTyp(e);
  };
  const [ispopupactive, setispopupactive] = useState(true);

  return (
    <div
      className="charts"
      style={{
        margin: "0px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={
          ispopupactive
            ? {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                border: "1px solid black",
                zIndex: "99",
                position: "fixed",
                borderRadius: "20px",
              }
            : { display: "none" }
        }
      >
        <h1>Welcome To Basic Data Visualtion Tool.</h1>
        <h1>Here you can find 3 Single Line 3 Multi Line Charts.</h1>
        <button
          style={{
            height: "40px",
            border: "1px solid black",
            borderRadius: "10px",
            width: "150px",
            cursor: "pointer",
          }}
          onClick={() => setispopupactive(false)}
        >
          Start x
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "50px",
        }}
      >
        <h1>{chartTyp}</h1>
        <button
          className="add_button"
          style={
            chartTyp === ""
              ? { display: "none" }
              : {
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }
          }
          onClick={() => handleAdd()}
        >
          Add Variables
        </button>
        <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {inputamount.map((data, i) => {
              return (
                <div style={{ display: "flex" }}>
                  <input onChange={(e) => handleChange(e, i)} required />
                  <button>x</button>
                </div>
              );
            })}
          </div>
          <div
            style={
              chartTyp === "Multi Line"
                ? { display: "flex", flexDirection: "column" }
                : { display: "none" }
            }
          >
            {inputamount2.map((data, i) => {
              return (
                <div style={{ display: "flex" }}>
                  <input onChange={(e) => handleChange2(e, i)} required />
                  <button>x</button>
                </div>
              );
            })}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "30px",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ margin: "20px", display: "flex", gap: "20px" }}>
            <button
              className="button_typ"
              onClick={() => setTypeFunction("Single Line")}
            >
              Single Line Chart
            </button>
            <button
              className="button_typ"
              onClick={() => setTypeFunction("Multi Line")}
            >
              Multi Line Chart
            </button>
          </div>

          <div>
            <select
              style={
                chartTyp === "Single Line"
                  ? { display: "flex" }
                  : { display: "none" }
              }
              value={charttype}
              onChange={(e) => setcharttype(e.target.value)}
            >
              <option>Select Chart Type</option>
              <option>Donut</option>
              <option>Single Line Chart</option>
              <option>Line</option>
            </select>
            <select
              style={
                chartTyp === "Multi Line"
                  ? { display: "flex" }
                  : { display: "none" }
              }
              value={charttype}
              onChange={(e) => setcharttype(e.target.value)}
            >
              <option>Select Chart Type</option>
              <option>Multi Axis Chart</option>
              <option>Multi Line Chart</option>
              <option>Line</option>
            </select>
          </div>
        </div>

        {/**         <input type="submit" onClick={isinputfull} />*/}
      </div>
      <div
        style={
          charttype === "Donut"
            ? { width: "500px", height: "500px" }
            : { display: "none" }
        }
      >
        <Doughnut
          data={{
            datasets: [
              {
                label: "# of Votes",
                data: [...inputamount],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        />
      </div>
      <div
        style={
          charttype === "Single Line Chart"
            ? { width: "500px", height: "500px" }
            : { display: "none" }
        }
      >
        <Line
          options={options}
          data={{
            labels,
            datasets: [
              {
                fill: true,
                label: "Dataset",
                data: [...inputamount],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
              },
            ],
          }}
        />
      </div>

      {/*MULTİLİNE */}

      <div
        style={
          charttype === "Multi Axis Chart"
            ? { width: "500px", height: "500px" }
            : { display: "none" }
        }
      >
        <Line
          options={options2}
          data={{
            labels,
            datasets: [
              {
                label: "Dataset 1",
                data: [...inputamount],
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                yAxisID: "y",
              },
              {
                label: "Dataset 2",
                data: [...inputamount2],
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
                yAxisID: "y1",
              },
            ],
          }}
        />
      </div>
      <div
        style={
          charttype === "Multi Line Chart"
            ? { width: "500px", height: "500px" }
            : { display: "none" }
        }
      >
        <Line
          options={options}
          data={{
            labels: [...inputamount],
            datasets: [
              {
                label: "Dataset 1",
                data: [...inputamount],
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
              },
              {
                label: "Dataset 2",
                data: [...inputamount2],
                borderColor: "rgb(2, 99, 132)",
                backgroundColor: "rgba(2, 99, 132, 0.5)",
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Charts;
