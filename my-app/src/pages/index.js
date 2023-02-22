import { useEffect, useState } from 'react'
import MeetupList from '@/components/meetups/MeetupList'

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
    address: 'Some Address',
    description: 'This is a meetup'
  },
  {
    id: 'm1',
    title: 'Second Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1600px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',
    address: 'Some Address',
    description: 'This is a meetup'
  }
]

function HomePage() {
  const [loadedMeetups, setLoadedMeetups] = useState([])
  useEffect(() => {
    // send http request and fetch data
    //
    setLoadedMeetups(DUMMY_MEETUPS)
  }, [])
  return <MeetupList meetups={loadedMeetups} />
}

export default HomePage
