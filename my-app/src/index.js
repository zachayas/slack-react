import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css';
import { Container, Menu, Image, Dropdown, Grid, Button, List} from 'semantic-ui-react';

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
                 icon={null}
             >
               <Dropdown.Menu direction='left'>
                 <Dropdown.Item><Image src={src2} size="small" rounded></Image>ics314s18</Dropdown.Item>
                 <Menu.Item><Image src={src3} size="small"  rounded></Image>uhm-ics-community</Menu.Item>
                 <Menu.Item><Image src={src4} size="small"  rounded></Image>GreyHats@UHM</Menu.Item>
                  <hr/>
                 <Menu.Item>Sign into Another Workspace</Menu.Item>
                 <Menu.Item>Create Workspace</Menu.Item>
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
    const tstyle = {paddingTop: '20px', paddingBottom:'90px'};
    return(
          <Container>
            <Grid columns={2} style={gstyle} verticalAlign="middle" centered>
              <Grid.Row>

                <Grid.Column>
                  <Image src={src1} size='large'/>
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
    const bstyle = {marginBottom:'48px'};
    const src1 = "https://a.slack-edge.com/c04e5/marketing/img/logos/company/airbnb.png"
    const src2 = "https://a.slack-edge.com/c04e5/marketing/img/logos/company/capital_one.png"
    const src3 = "https://a.slack-edge.com/c04e5/marketing/img/logos/company/harvard.png"
    const src4 = "https://a.slack-edge.com/4b6fe/marketing/img/logos/company/los-angeles-times.png"
    const src5 = "https://a.slack-edge.com/c04e5/marketing/img/logos/company/oracle.png"
    const src6 = "https://a.slack-edge.com/c04e5/marketing/img/logos/company/ticketmaster.png"
    return (
        <div className='grey-background'>

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

            <Grid celled='internally' centered style={bstyle}>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Image src={src1} centered/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Image src={src2} centered/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Image src={src3} centered/>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row style={bstyle}>
                <Grid.Column width={5}>
                  <Image src={src4} centered/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Image src={src5} centered/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Image src={src6} centered/>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Grid>

        </div>

    )
  }
}

  class Footer extends React.Component{
  render () {
  const src1 = "https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png"
      const pstyle={paddingTop: '80px', marginRight:'50px'};
      const small={width:'60px', height:'60px'};
    return (
 <div className="white-background">
   <Container>
    <Grid columns={5} padded>
      <Grid.Column width={4} style={pstyle}>
      <Image src={src1} style={small} />
      </Grid.Column>

      <Grid.Column width={2} style={pstyle}>
      <h3>Company</h3>
        <List>
          <List.Item>About Us</List.Item>
          <List.Item>Careers</List.Item>
          <List.Item>Blog</List.Item>
        </List>
      </Grid.Column>

      <Grid.Column width={2} style={pstyle}>
        <h3>Product</h3>
        <List>
          <List.Item>Why Slack?</List.Item>
          <List.Item>Enterprise</List.Item>
          <List.Item>Security</List.Item>
        </List>
      </Grid.Column>

      <Grid.Column width={2} style={pstyle}>
        <h3>Resources</h3>
        <List>
          <List.Item>Download</List.Item>
          <List.Item>Help Center</List.Item>
          <List.Item>Guides</List.Item>
        </List>
      </Grid.Column>

      <Grid.Column width={2} style={pstyle}>
        <h3>Extras</h3>
        <List>
          <List.Item>Podcast</List.Item>
          <List.Item>Slack Shop</List.Item>
          <List.Item>Slack Fund</List.Item>
        </List>
      </Grid.Column>

    </Grid>
   </Container>
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