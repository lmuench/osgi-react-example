const agenda = {};

agenda.get = async () => {
  const res = await fetch('http://localhost:9090/services/agenda');
  return await res.json();
}

export default agenda;