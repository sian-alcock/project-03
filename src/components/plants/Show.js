import React from 'react'
import axios from 'axios'


class PlantsShow extends React.Component {

  constructor() {
    super()
    this.state = {
      plant: {}
    }
  }

  componentDidMount() {
    axios.get(`/api/plants/${this.props.match.params.id}`)
      .then(res => this.setState({ plant: res.data }))
  }


  render() {
    console.log(this.state.plant)
    return (
      <section className="section plants-show-background">
        <div className="container">
          <div className="box">
            <h1 className="title">{this.state.plant.name}</h1>
            <div className="columns is-multiline">

              <div className="column is-half is-centered">
                <img className="ShowImage" src={this.state.plant.image} alt={this.state.plant.name}/>
              </div>

              <div className="column is-half is-centered">
                <div className="table-container">
                  <table className="table tableBorder">
                    <tbody>
                      <tr>
                        <td><p>Sow under direct sunlight?</p></td>
                        <td><p>{this.state.plant.sowUnderDirectSunlight ? '☀️' : '❌'}</p></td>
                      </tr>
                      <tr>
                        <td><p>Sow under glass?</p></td>
                        <td><p>{this.state.plant.sowUnderGlass ? '✅' : '❌'}</p></td>
                      </tr>
                      <tr>
                        <td><p>Germination period (days):</p></td>
                        <td><p>{this.state.plant.germination}</p></td>
                      </tr>
                      <tr>
                        <td><p>Maturation (days):</p></td>
                        <td><p>{this.state.plant.daysToMaturation}</p></td>
                      </tr>
                      <tr>
                        <td><p>Seed period:</p></td>
                        <td><p>{!this.state.plant.seedPeriod ? '' : this.state.plant.seedPeriod.map((item, i) => (i ? ', ' : '') + item)}</p></td>
                      </tr>
                      <tr>
                        <td><p>Harvest period:</p></td>
                        <td><p>{!this.state.plant.harvestPeriod ? '' : this.state.plant.harvestPeriod.map((item, i) => (i ? ', ' : '') + item)}</p></td>
                      </tr>
                      <tr>
                        <td><p>Propogator needed?</p></td>
                        <td><p>{this.state.plant.propagator ? '✅' : '❌'}</p></td>
                      </tr>
                      <tr>
                        <td><p>Pot size (cm):</p></td>
                        <td>{this.state.plant.potSize}</td>
                      </tr>
                      <tr>
                        <td><p>Spacing (cm):</p></td>
                        <td>{this.state.plant.spacing}</td>
                      </tr>
                      <tr>
                        <td><p>Destroyed by:</p></td>
                        <td>{this.state.plant.destroyedBy}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default PlantsShow
