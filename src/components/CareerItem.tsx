type CareerItemProps = {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

const CareerItem: React.FC<CareerItemProps> = (career) => {
  return (
    <>
      <div className='mb-3'>
        <div className='grid grid-cols-2 gap-5'>
          <div>
            <p>
              {career.startDate} - {career.endDate}
              <p className='text-secondary'>{career.location}</p>
            </p>
          </div>
          <div>
            <h1 className=''>{career.title}</h1>
            <h2>{career.company}</h2>
            {/* <p>{career.description}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerItem;
