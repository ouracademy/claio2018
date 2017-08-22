import Head from 'next/head'
import BillBoard from '../components/billboard'
import {
  Segment,
  Container,
  Menu,
  Header,
  Grid,
  Image,
  Button
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
      <BillBoard/>
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
  </div>
)