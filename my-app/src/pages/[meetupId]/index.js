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

export default MeetupDetails
