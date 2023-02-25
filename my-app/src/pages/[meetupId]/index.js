import { Fragment } from 'react'
import { MongoClient, ObjectId } from 'mongodb'
import MeetupDetail from '@/components/meetups/meetupDetail'
import Head from 'next/head'

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name='description' content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  )
}

// Note: getStaticProps and getStaticPaths only runs during build time. And only runs on the developerserver side.
// So, we only see it in the developer terminal, and not in the browser.

// must include when using getStaticProps
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://johnsonsg:6LOAXi8KulHpceIa@cluster0.wvnjnk4.mongodb.net/meetups?retryWrites=true&w=majority'
  )
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray()

  client.close()

  return {
    fallback: false, // false define some paths - true define all paths
    paths: meetups.map(meetup => ({
      params: { meetupId: meetup._id.toString() }
    }))
    // [
    //   ({
    //     params: {
    //       meetupId: 'm1'
    //     }
    //   },
    //   {
    //     params: {
    //       meetupId: 'm2'
    //     }
    //   })
    // ]
  }
}

// getStaticProps
export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId
  // console.log(meetupId)

  const client = await MongoClient.connect(
    'mongodb+srv://johnsonsg:6LOAXi8KulHpceIa@cluster0.wvnjnk4.mongodb.net/meetups?retryWrites=true&w=majority'
  )
  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const selectedMeetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId)
  })

  client.close()

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description
      }
    }
  }
}

export default MeetupDetails
