const sensorsMockApi = {};

sensorsMockApi.get = async () => (
  ['sd1', 'sd2']
);

sensorsMockApi.name = {};

sensorsMockApi.name.get = async name => (
  {
    name: name,
    type: 'smoke'
  }
);

export default sensorsMockApi;  