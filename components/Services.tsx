const services = [
    { id: '01',title:'PostGraduate | MCA',description:'Dr.SNS Rajalakshmi College of Arts & Science, Coimbatore | 2023 - 2025 '},
    { id: '02',title:'UnderGraduate | B.com CA',description:'Lady Doak College, Madurai | 2020 - 2023 | 78%'},
    { id: '03',title:'HSC',description:'S.D.H.Jain Vidyalaya, Madurai | 2019 - 2020 | 89%'},
    { id: '04',title:'SSLC',description:'S.D.H.Jain Vidyalaya, Madurai | 2017 - 2018 | 76.50%'}
]

export const Services = () => {
 
    return (
        <section className="text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row">
                <div className="md:w-1/8 pr-8 mb-12 md:mb-0">
                    <h2 className="text-purple-300 text-6xl font-extrabold sticky top-20">Qualifications</h2>
                </div>

                <div className="md:w-3/4">
                    {services.map(service => (
                        <div key={service.id} className="mb-16 flex items-start">
                            <div className="text-purple-300 font-bold text-5xl mr-6">
                                {service.id}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div> 
                    ))}
                </div>

            </div>
        </section>
    )
}