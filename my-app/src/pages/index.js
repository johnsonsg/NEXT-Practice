import Layout from '@/components/layout/Layout'
import MeetupList from '@/components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    ID: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
    address: 'Some Address',
    description: 'This is a meetup'
  },
  {
    ID: 'm1',
    title: 'Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
    address: 'Some Address',
    description: 'This is a meetup'
  }
]

function HomePage() {
  return (
    <Layout>
      <MeetupList meetups={DUMMY_MEETUPS} />
    </Layout>
  )
}

export default HomePage
