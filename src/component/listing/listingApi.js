import React, { Component } from "react";
import "./listing.css";
import axios from "axios";
import ListingDisplay from "./listingDisplay";

const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=";

class ListingApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantList: "",
    };
  }
  render() {
    return (
      <>
        <div className="row">
          <div id="mainLosting">
            <div id="filter">
              <center>
                <h1>filter</h1>
              </center>
            </div>
            <ListingDisplay listData={this.state.restaurantList} />
          </div>
        </div>
      </>
    );
  }

  //call api with axios
  componentDidMount() {
    let mealId = this.props.match.params.mealId;
    axios.get(`${url}${mealId}`).then((res) => {
      this.setState({ restaurantList: res.data });
    });
  }
}

export default ListingApi;
