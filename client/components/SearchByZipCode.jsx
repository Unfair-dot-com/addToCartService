import React from 'react';
import axios from 'axios';
import weekday from 'weekday';
import ZIPCODE_API_KEY from '../zipcodeapikey.js';

class SearchByZipCode extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zip: '',
      city: ''
    };

    this.getZipCode = this.getZipCode.bind(this);
    this.handleZipCodeChange = this.handleZipCodeChange.bind(this);
  }

  getZipCode() {
    let zipcode = this.state.zip;
    axios.get(`https://www.zipcodeapi.com/rest/${ZIPCODE_API_KEY}/info.json/${zipcode}/degrees`)
    .then((response) => {
      console.log('zipcode- ', response.data);
      this.setState({ zip: response.data.zip_code, city: response.data.city })
    })
    .catch((error) => {
      console.log('error in zipcode get- ', error);
    })
  }

  handleZipCodeChange(e) {
    this.setState({ zip: e.target.value });
  }

  render() {
    return (
      <div>
        <form>
          Ship To:<span className="zipState"> {this.state.zip}  {this.state.city}<br /></span>
          <input onChange={this.handleZipCodeChange} /> &nbsp;&nbsp;
          <button type="button" onClick={this.getZipCode}> &nbsp;&nbsp;Search</button><br /><br />
        </form>
      </div>
    )
  }
}

export default SearchByZipCode;