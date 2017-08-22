import Head from 'next/head'
import {
  Segment,
  Container,
  Menu,
  Header,
  Grid,
  Image,
  Button,
  Icon
} from 'semantic-ui-react'

export default () => (
  <div>
    <Head>
      <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
    </Head>
    <Segment
      inverted
      textAlign='center'
      vertical
      className="billboard"
    >
      <Container>
        <Menu inverted pointing secondary attached size='large'>
          <Menu.Item header>CLAIO 2018</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item as='a' active>Home</Menu.Item>
            <Menu.Item as='a'>CLAIO 2018</Menu.Item>
            <Menu.Item as='a'>Schedule</Menu.Item>
            <Menu.Item as='a'>Call For Papers</Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
      <Container text>
        <Header
          as='h1'
          content='Welcome to CLAIO 2018'
          inverted
        />
        <Header
          as='h2'
          content='November 5-7, 2018 – Lima, Perú'
          inverted
        />
        <Button primary size='huge'>
          Submit your paper<Icon name='right arrow' />
        </Button>
      </Container>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>CLAIO 2018</Header>
            <p style={{ fontSize: '1.33em' }}>
              The 18th Latin-Iberoamerican Conference on Operations Research, CLAIO 2016, is hosted
              by the School of Engineering at the Pontificia Universidad Católica de Chile and 
              organized together with the Association of Latin-Iberoamerican Operational Research
               Societies (ALIO) and the Peruvian Society of Operations Research (SOPIOS).
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>Want to know more about CLAIO?</Header>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image
              bordered
              rounded
              size='large'
              src='http://claio2016.cl/wp-content/uploads/2016/03/claio.png'
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <style jsx>{`
           

    `}</style>
    <style jsx global>{`
      .billboard {
        background-image: url('static/background.jpg') !important;
        background-size: cover !important;
      }
      
      h1.ui.inverted.header { 
        font-size: 3.8em;
        font-weight: normal;
        margin-bottom: 0;
        margin-top: 3em;
      }

      h2.ui.inverted.header {
        font-size: 1.7em;
        font-weight: normal;
      }

      .ui.inverted.vertical.center.aligned.segment {
        min-height: 700px;
        padding: 1em 0em;
      }
    `}
    </style>
  </div>
)