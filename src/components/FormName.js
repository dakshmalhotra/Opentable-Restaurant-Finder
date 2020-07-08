import React from 'react';

class FormName extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            name: [],
            error: null,
            isLoading: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    fetchName(getname) {
        // The API where we're fetching data from
        let url = "https://opentable.herokuapp.com/api/restaurants?name=" + getname;
        //alert(url);
        fetch(url)
        // We get a response and receive the data in JSON format...
            .then(response => { return response.json()})
            // ...then we update the state of our application
            .then(
                data => {
                    //console.log(data);

                    let name = data.restaurants.map(function(res) {
                        //console.log("res: " + res);
                        return (
                            <ul className="restaurantList" key={res.id}>
                                <li><strong>Name:</strong> {res.name}</li>
                                <li><strong>Address:</strong> {res.address}</li>
                                <li><strong>City:</strong> {res.city}</li>
                                <li><strong>Price:</strong> {res.price}/5</li>
                                <li><img alt="" src={res.image_url}/></li>
                            </ul>
                        )
                    });

                    this.setState({
                        name: name
                    });

                    //console.log("name: " + this.state.name);
                }
            )
             .then(data => {console.log("data is: " + JSON.stringify(this.state.name))})
            // If we catch errors instead of a response, let's update the app
            .catch(error => this.setState({ error, isLoading: false }));
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
       //console.log('A name was submitted: ' + this.state.value);

        this.fetchName(this.state.value);

        //console.log("this state name: " + this.state.value);
        //console.log("name data: " + JSON.stringify(this.state.name));

        event.preventDefault();
    }


    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} name="Search Name">
                <label>
                    Search by Name: &nbsp;
                    <input type="text" placeholder="Enter Restaurant Name" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div id="restaurantNameInfo">{this.state.name}</div>
            </div>
        );
    }
}

export default FormName;
