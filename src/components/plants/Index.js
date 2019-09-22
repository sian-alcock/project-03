import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import PlantsCard from '../common/PlantsCard'

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

class PlantsIndex extends React.Component {
  constructor(){

    super()
    this.state={
      plants: []
    }
  }


  componentDidMount() {
    axios.get('/api/plants')
      .then(res => this.setState({ plants: res.data}))
  }

  render() {
    // if(!this.state.plants) return null
    console.log(this.state.plants)

    return (
      <section className="section plants-background">
        <div className="container">

          <div className="box tableBorder">
            <h3 className="subtitle is-size-3">Plants calendar</h3>
            <p className="before-control">Use this cheatsheet to find out when to seed your plants and when to harvest them.  Click on the name of the plant to see more helpful growing hints.</p>

            <div className="columns">

              <div className="column is-1 green">
              </div>

              <div className="column is-5">
                <p>Seed plants</p>
              </div>

              <div className="column is-1 orange">
              </div>

              <div className="column is-5">
                <p>Harvest plants</p>
              </div>

            </div>
          </div>

          <div className="container scroll-x tableBorder">
            <table className="table plant-table is-bordered is-hoverable is-fullwidth">
              <thead className="plant-head">
                <tr>
                  <th className="plant-font">Plant Name</th>
                  <th>Image</th>
                  <th className="tableoption">Jan</th>
                  <th className="tableoption">Feb</th>
                  <th className="tableoption">Mar</th>
                  <th className="tableoption">Apr</th>
                  <th className="tableoption">May</th>
                  <th className="tableoption">Jun</th>
                  <th className="tableoption">Jul</th>
                  <th className="tableoption">Aug</th>
                  <th className="tableoption">Sep</th>
                  <th className="tableoption">Oct</th>
                  <th className="tableoption">Nov</th>
                  <th className="tableoption">Dec</th>
                </tr>
              </thead>


              <tbody>
                {this.state.plants.map(plant =>
                  <tr key={plant._id}>
                    <td><Link to={`/plants/${plant._id}`}><p>{plant.name}</p></Link></td>
                    <td><img src={plant.image} alt={plant.name} className="plantimage"/></td>
                    {months.map(month =>
                      <td key={month}>
                        {<div className={`${plant.seedPeriod.includes(month) ? 'is-seed-period' : ''}`} />}
                        {<div className={`${plant.harvestPeriod.includes(month) ? 'is-harvest-period' : ''}`} />}
                      </td>
                    )}
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    )
  }
}


export default PlantsIndex
