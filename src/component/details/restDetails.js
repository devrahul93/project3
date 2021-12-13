import react, { Component } from "react";
import axios from "axios";
import "./details.css";

const url = "http://zomatoajulypi.herokuapp.com/details/1";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: "",
      menuList: "",
      userItem: "",
    };
  }
  render() {
    return <></>;
  }

  //call api with axios
  //  componentDidMount() {
  //     let mealId = this.props.match.params.mealId;
  //     axios.get(`${url}${mealId}`).then((res) => {
  //       this.setState({ restaurantList: res.data });
  //     });
  //   }

  //call api with axios
  async componentDidMount() {
    let restId = this.props.match.params.restId;
    let response = await axios.get(`${url}/${restId}`);
    this.setState({ restaurantList: response.data });
  }
}

export default Details;
