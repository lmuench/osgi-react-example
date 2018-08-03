import React, { Component } from 'react';
import apiConfig from '../api/apiConfig';
import conferencesApi from '../api/conferencesApi';
import conferencesMockApi from '../api/conferencesMockApi';
import ConferenceShow from '../components/conferences/ConferenceShow';

const api = apiConfig.mock ? conferencesMockApi : conferencesApi;

class ConferencesContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conference: {}
    };
  }

  async componentDidMount() {
    this.setState({
      conference: await api.name.get(this.props.match.params.name)
    });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps === this.props) return;
    this.setState({
      conference: await api.name.get(this.props.match.params.name)
    });
  }

  render = () => (
    <div className="Conference">
      <ConferenceShow conference={this.state.conference} />
    </div>
  );
}

export default ConferencesContainer;
