// Using standard img tags instead of Next.js Image component

const TestimonialCard = ({ text, name, title, avatar }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="mb-6">
        <svg className="h-8 w-8 text-primary opacity-50" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-6 italic">{text}</p>
      <div className="flex items-center">
        {avatar ? (
          <div className="h-12 w-12 rounded-full overflow-hidden mr-4 flex-shrink-0">
            <img src={avatar} alt={name} width="48" height="48" className="object-cover w-full h-full" />
          </div>
        ) : (
          <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center mr-4 flex-shrink-0">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h4 className="font-bold text-primary">{name}</h4>
          <p className="text-gray-500 text-sm">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;