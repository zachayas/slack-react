import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';

















class Slack extends React.Component {
  render() {
    return (
      <div>
        <TopMenu/>
        <MiddleSection/>
        <Sponsers/>
        <Footer/>
      </div>
  );
  }
}

ReactDOM.render(<Slack/>, document.getElementById('root'));