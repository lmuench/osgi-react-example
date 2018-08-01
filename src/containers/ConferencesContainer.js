import React, { Component } from 'react';
import conferences from '../api/conferences';
import ConferenceShow from '../components/conferences/ConferenceShow';

class ConferencesContainer extends Component {
  constructor(props) {
    super();
    this.state = {
      conference: {}
    };
  }

  async componentDidMount() {
    this.setState({
      conference: await conferences.name.get(this.props.match.params.name)
    });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps === this.props) return;
    this.setState({
      conference: await conferences.name.get(this.props.match.params.name)
    });
  }

  render = () => (
    <div className="Conference">
      <ConferenceShow conference={this.state.conference} />
    </div>
  );
}

export default ConferencesContainer;
