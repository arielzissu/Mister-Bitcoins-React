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
        <Chart
          width={"650px"}
          height={"450px"}
          chartType="AreaChart"
          loader={<div>Loading Chart</div>}
          data={values ? values : null}
          options={{
            title: "Average USD market price across major bitcoin exchanges",
            hAxis: { title: "Year", titleTextStyle: { color: "black" } },
            vAxis: { title: "Dollars", minValue: 0 },
            chartArea: { width: "50%", height: "70%" },
          }}
        />
      </section>
    );
  }
}
