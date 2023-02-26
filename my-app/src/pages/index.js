import Head from 'next/head'
import { MongoClient } from 'mongodb'
import MeetupList from '../../components/meetups/MeetupList'
import { Fragment } from 'react'

// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'A First Meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
//     address: 'Some Address',
//     description: 'This is a meetup'
//   },
//   {
//     id: 'm2',
//     title: 'Second Meetup',
//     image:
//       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
//     address: 'Some Address',
//     description: 'This is a meetup'
//   }
// ]

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name='description' content='Browse List of meetups' />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )
}

// Server Side Rendering - For data changing frequently
// export async function getServerSideProps(context) {
//   const req = context.req // request, for something like Authentication
//   const res = context.res // response

//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

// Static
export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    'mongodb+srv://johnsonsg:6LOAXi8KulHpceIa@cluster0.wvnjnk4.mongodb.net/meetups?retryWrites=true&w=majority'
  )
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()

  client.close()

  return {
    props: {
      // meetups: DUMMY_MEETUPS
      meetups: meetups.map(meetup => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image
      }))
    },
    revalidate: 1
  }
}

export default HomePage
