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

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />
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
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  }
}

export default HomePage
