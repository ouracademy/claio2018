import {
    Container,
    Header,
    Button,
    Icon 
} from 'semantic-ui-react'

export default () => (
    <div>
        <Container text>
            <Header
                as='h1'
                content='Welcome to CLAIO 2018'
                inverted
            />
            <Header
                as='h2'
                content='November 12-15, 2018 – Lima, Perú'
                inverted
            />
            <Button primary size='huge'>
                Submit your paper<Icon name='right arrow' />
            </Button>
        </Container>
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
        `}</style>
    </div>
)