import topics from '../data/topics'

export default () => (
    <div>
        <h1>Topics</h1>
        <p>The conference will cover several topics in Operations Research and related areas:</p>
        <Topics topics={topics} />
    </div>
)

const Topics = ({ topics }) => (
    <ul>
        {topics.map(topic => <Topic topic={topic} />)}
    </ul>
)

const Topic = ({ topic }) => (
    <li>
        {topic.name}
        {topic.subAreas && <Topics topics={topic.subAreas} />}
    </li>
)