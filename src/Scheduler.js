import React, { PureComponent } from 'react'
import moment from 'moment';
import data from './mockData';
import DataLogger from './DataLogger';

function getDays() {
  const today = moment();
  const end = moment().add(1, 'month');

  const dayArray = [today.toISOString()];

  for (var day = moment(); day.isBefore(end); day.add(1, 'day')) {
    dayArray.push(day.toISOString());
  }

  return dayArray;
}

function Resource(props) {
  return (
    <div style={{
      width: 200,
    }}>
      {props.resource.name}
    </div>
  )
}

function SchedulerRow(props) {
  console.log(props)
  return (
    <tr>
      <td className="resource">
        <props.ResourceComponent index={props.index} />

      </td>
      {props.days.map(day => <td>1</td>)}
    </tr>
  )
}

export default class Scheduler extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      days: getDays(),
    }
  }

  render() {
    const rows = this.props.resources.map((resource, index) =>
      <SchedulerRow
        resource={resource}
        days={this.state.days}
        ResourceComponent={this.props.Resource}
        index={index}
      />
    );
    const days = this.state.days.map(day => <th><div style={{ width: 70 }}>{moment(day).format('D MMM')}</div></th>);
    return (

      <React.Fragment>
        <div
          className="scheduler-container"
          style={{
            width: '100%',
            overflowX: 'auto',
          }}
        >
          <table border="1" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th></th>
                {days}
              </tr>
            </thead>

            <tbody>
              {rows}
            </tbody>
          </table>

        </div>
        <DataLogger data={this.state} />
      </React.Fragment>
    );
  }
}