import { Fragment } from 'react'
import MeetupDetail from '@/components/meetups/meetupDetail'

function MeetupDetails() {
  return (
    <Fragment>
      <MeetupDetail
        image={`https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153`}
        title='First Meetup'
        address='Some Street 5, Some City'
        description='This is a first meetup'
      />
    </Fragment>
  )
}

// Note: getStaticProps and getStaticPaths only runs during build time. And only runs on the developerserver side.
// So, we only see it in the developer terminal, and not in the browser.

// must include when using getStaticProps
export async function getStaticPaths() {
  return {
    fallback: false, // false define some paths - true define all paths
    paths: [
      {
        params: {
          meetupId: 'm1'
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  }
}

// getStaticProps
export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId
  // console.log(meetupId)

  return {
    props: {
      meetupData: {
        image: `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153`,
        id: 'm1',
        title: 'First Meetup',
        address: 'Some Street 5, Some City',
        description: 'This is a first meetup'
      }
    }
  }
}

export default MeetupDetails
