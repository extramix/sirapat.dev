import CareerItem from './CareerItem';
const Career = () => {
  const careerData = [
    {
      id: '1',
      title: 'Software Engineer',
      company: 'Playtorium Solutions',
      location: 'Bangkok, Thailand',
      startDate: 'July 2021',
      endDate: 'Present',
      description:
        'Working on the Playtorium Homes team, focusing on the backend side of the business. I am currently working on the team that is responsible for the Playtorium Homes API, which is used by the Playtorium Homes website and mobile app. I am also working on the team that is responsible for the Playtorium Homes extranet, which is used by Playtorium Homes partners to manage their properties.',
    },
    {
      id: '2',
      title: 'Software Engineer',
      company: 'Playtorium Solutions',
      location: 'Bangkok, Thailand',
      startDate: 'July 2021',
      endDate: 'Present',
      description:
        'Working on the Playtorium Homes team, focusing on the backend side of the business. I am currently working on the team that is responsible for the Playtorium Homes API, which is used by the Playtorium Homes website and mobile app. I am also working on the team that is responsible for the Playtorium Homes extranet, which is used by Playtorium Homes partners to manage their properties.',
    },
    {
      id: '3',
      title: 'Software Engineer',
      company: 'Playtorium Solutions',
      location: 'Bangkok, Thailand',
      startDate: 'July 2021',
      endDate: 'Present',
      description:
        'Working on the Playtorium Homes team, focusing on the backend side of the business. I am currently working on the team that is responsible for the Playtorium Homes API, which is used by the Playtorium Homes website and mobile app. I am also working on the team that is responsible for the Playtorium Homes extranet, which is used by Playtorium Homes partners to manage their properties.',
    },
  ];
  return (
    <>
      <h1 className='font-semibold mb-5 text-lg'>Career Timeline</h1>
      {careerData.map((career) => (
        <CareerItem
          key={career.id}
          title={career.title}
          company={career.company}
          location={career.location}
          startDate={career.startDate}
          endDate={career.endDate}
          description={career.description}
        />
      ))}
    </>
  );
};

export default Career;
