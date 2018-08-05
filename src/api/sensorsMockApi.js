const sensorsMockApi = {};

sensorsMockApi.get = async () => (
  ['Foo', 'Bar']
);

sensorsMockApi.name = {};

sensorsMockApi.name.get = async name => (
  {
    location: 'Foo',
    name: 'Bar'
  }
);

export default sensorsMockApi;  