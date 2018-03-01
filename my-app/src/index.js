import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Image, Dropdown, Grid, Button} from 'semantic-ui-react';

class TopMenu extends React.Component{
  render () {
      const src1 = "https://stdlib.com/static/images/wordmarks/slack.svg"
      const src2 = "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-01-04/293806485728_f546719f1d747f9cb241_88.png"
      const src3 = "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2017-06-21/201113641265_ee90edd90fd1a9738bf0_88.png"
      const src4 = "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2016-08-29/74208005351_f40dc4d4ccec8d042385_88.png"

    return (
        <Menu borderless className="topmenu">
          <Container>
            <Image src={src1} className="smaller"/>
            <Menu.Item position='right'>Why Slack?</Menu.Item>
            <Menu.Item>Pricing</Menu.Item>
            <Menu.Item>About US</Menu.Item>

             <Dropdown
                 button
                 text='Your Workspaces'
                 basic
                 icon=''

             >
               <Dropdown.Menu>
                 <Menu.Item><Image src={src2} small rounded></Image>ics314s18</Menu.Item>
                 <Menu.Item><Image src={src3} small rounded></Image>uhm-ics-community</Menu.Item>
                 <Menu.Item><Image src={src4} small rounded></Image>GreyHats@UHM</Menu.Item>

               </Dropdown.Menu>
             </Dropdown>

          </Container>
        </Menu>
    )
  }
}

class MiddleSection extends React.Component{
  render () {
    const src1 = 'https://a.slack-edge.com/52353/marketing/img/home/home_illo.png'
    const gstyle = {height: "700px"};
    const tstyle = {paddingTop: '10px', paddingBottom:'150px'};
    return(
          <Container>
            <Grid columns={2} style={gstyle} verticalAlign="middle" centered>
              <Grid.Row>

                <Grid.Column>
                  <Image src={src1} medium/>
                </Grid.Column>

                <Grid.Column>
                  <div className="big-bold-text"> Where Work<br/> Happens</div>
                  <div className="big-text">When your team needs to kick off a project, hire a new employee, deploy some code, review a sales contract, finalize next year's budget, measure an A/B test, plan your next office opening, and more, Slack has you covered.</div>
                  <Button size='big' >
                    Get Started
                  </Button>
                  <div style={tstyle}>Already using Slack? <a>Sign In.</a></div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
    )
  }
}

class Sponsers extends React.Component {
  render() {
    const fstyle = {fontSize:'15px'};
    const bstyle = {marginBottom:'20px'};

    const src1 = "https://a.slack-edge.com/c04e5/marketing/img/logos/company/airbnb.png"
    const src2 = "https://a.slack-edge.com/c04e5/marketing/img/logos/company/capital_one.png"
    const src3 = "https://a.slack-edge.com/c04e5/marketing/img/logos/company/harvard.png"
    const src4 = "https://a.slack-edge.com/4b6fe/marketing/img/logos/company/los-angeles-times.png"
    const src5 = "https://a.slack-edge.com/c04e5/marketing/img/logos/company/oracle.png"
    const src6 = "https://a.slack-edge.com/c04e5/marketing/img/logos/company/ticketmaster.png"
    return (
        <div className='grey-background'>
        <Container>
          <Grid centered>
            <Grid.Row>
              <div className="medium-bold-text"> You're in good company</div>
            </Grid.Row>

            <Grid.Row>
              <p style={fstyle}>Millions of people around the world have already made Slack the place where their work happens.</p>
            </Grid.Row>

            <Grid.Row>
              <Button style={bstyle} size='big' basic> DISCOVER WHY</Button>
            </Grid.Row>

            <Grid divided='vertically' centered>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Image src={src1} />
                </Grid.Column>
                <Grid.Column width={3}>
                  <Image src={src2} />
                </Grid.Column>
                <Grid.Column width={3}>
                  <Image src={src3} />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={bstyle}>
                <Grid.Column width={3}>
                  <Image src={src4} spaced />
                </Grid.Column>
                <Grid.Column width={3}>
                  <Image src={src5} />
                </Grid.Column>
                <Grid.Column width={3}>
                  <Image src={src6} />
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Grid>
        </Container>
        </div>

    )
  }
}

  class Footer extends React.Component{
  render () {
  const src1 = "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png"
    return (
 <div className="white-background">
  <Grid columns={5} padded>
  <Grid.Column width={7}>
    <Image src={src1} size='mini' />
  </Grid.Column>
  </Grid>
 </div>

    )
  }
}














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