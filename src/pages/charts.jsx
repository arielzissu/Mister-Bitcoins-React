import React, { Component } from "react";
import { Chart } from "react-google-charts";
import bitcoinsService from "../services/bitcoins.service";
import * as moment from "moment";

export default class Charts extends Component {
  state = {
    values: null,
  };

  async componentDidMount() {
    const { values } = await bitcoinsService.getCharts();
    const newValues = values.map((coord) => {
      coord.x = moment(coord.x * 1000).format("YYYY-MM-DD");
      return (coord = [coord.x, coord.y]);
    });
    newValues.unshift(["Date", "USD"]);
    this.setState({ values: newValues });
  }

  render() {
    const { values } = this.state;
    return (
      <section className="chart-page-container">
        <h2 className="chart-page-title">
          Average USD market price across major bitcoin exchanges
        </h2>
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={
            values
              ? values
              : [
                  ["Date", "USD"],
                  ["2019-11-03", 7286.36],
                  ["2019-11-13", 6886.25],
                  ["2019-11-23", 7486.15],
                  ["2019-12-03", 6686.33],
                ]
          }
          options={{
            title: "Company Performance",
            hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
            vAxis: { minValue: 0 },
            chartArea: { width: "50%", height: "70%" },
          }}
        />
      </section>
    );
  }
}
