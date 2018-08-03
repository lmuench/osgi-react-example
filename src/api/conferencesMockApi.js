const conferencesMockApi = {};

conferencesMockApi.get = async () => (
  ['Foo', 'Bar']
);

conferencesMockApi.name = {};

conferencesMockApi.name.get = async name => (
  {
    location: 'Foo',
    name: 'Bar'
  }
);

export default conferencesMockApi;