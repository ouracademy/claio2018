import {
    Segment,
    Container,
    List
} from 'semantic-ui-react'

export default () => (
    <Segment
        inverted
        style={{ padding: '5em 0em' }}
        vertical
    >
        <Container textAlign='center'>
            <List horizontal inverted divided link>
                <List.Item as='a' href='#'>Site Map</List.Item>
                <List.Item as='a' href='#'>Contact Us</List.Item>
                <List.Item as='a' href='#'>Terms and Conditions</List.Item>
                <List.Item as='a' href='#'>Privacy Policy</List.Item>
            </List>
        </Container>
    </Segment>
)