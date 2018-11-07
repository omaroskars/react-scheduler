import moment from 'moment';

export default [
  {
    name: 'resource 1',
    events: [
      {
        name: 'event',
        timeFrom: moment(),
        timeTo: moment().add(1, 'hour'),
      }
    ]
  },
  {
    name: 'resource 2',
    events: [
      {
        name: 'event',
        timeFrom: moment(),
        timeTo: moment().add(1, 'hour'),
      }
    ]
  },
  {
    name: 'resource 1',
    events: [
      {
        name: 'event',
        timeFrom: moment(),
        timeTo: moment().add(1, 'hour'),
      }
    ]
  }
]