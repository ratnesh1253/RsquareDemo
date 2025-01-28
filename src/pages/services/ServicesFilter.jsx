import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const ServicesFilter =({activeTab,setActiveTab,filteredServices})=>{
    return (
        <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-2 rounded-full ${
              activeTab === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All Services
          </button>
          {['consulting', 'development'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-6 py-2 rounded-full capitalize ${
                activeTab === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <img 
        src={service.icon} 
        alt={service.title} 
        className="w-full h-48 object-cover rounded-md mb-4" 
      />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <button className="mt-6 flex items-center text-blue-600 hover:text-blue-800">
                Learn More <ArrowRightAltIcon className="w-4 h-4 ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    )
}

export default ServicesFilter;