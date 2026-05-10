import { Autoplay, EffectFade, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import testimonialBg from '/assets/img/testimonial/testimonial.png'

const testimonials = [
  {
    id: crypto.randomUUID(),
    name: 'Rohit Mehta',
    position: 'CTO',
    feedback:
      'Esha IT Consultancy delivered exactly what we needed — a reliable, scalable IT solution within our timeline. Their team understood our business challenges and provided strategic guidance that truly added value.',
  },
  {
    id: crypto.randomUUID(),
    name: 'Sarah Williams',
    position: 'Operations Manager',
    feedback:
      'Working with Esha IT Consultancy has been a seamless experience. Their professionalism, technical expertise, and proactive communication made our project execution smooth and efficient.',
  },
  {
    id: crypto.randomUUID(),
    name: 'Arjun Nair',
    position: 'HR Director',
    feedback:
      'We partnered with Esha IT Consultancy for IT staffing, and the quality of candidates exceeded our expectations. Their screening process is strong, and they understand client requirements perfectly.',
  },
  {
    id: crypto.randomUUID(),
    name: 'Emily Carter',
    position: 'Founder',
    feedback:
      'What impressed us most about Esha IT Consultancy is their commitment to delivering results. They don’t just provide services — they become a part of your growth journey.',
  },
  {
    id: crypto.randomUUID(),
    name: 'Karthik Reddy',
    position: 'IT Head',
    feedback:
      'The team at Esha IT Consultancy is highly responsive and easy to work with. Their solutions helped us improve operational efficiency and reduce downtime significantly.',
  },
  {
    id: crypto.randomUUID(),
    name: 'David Brown',
    position: 'Compliance Lead',
    feedback:
      'From consultation to implementation, Esha IT Consultancy maintained transparency and clarity. Their expertise in technology and compliance gave us confidence throughout the project.',
  },
  {
    id: crypto.randomUUID(),
    name: 'Priya Sharma',
    position: 'Business Manager',
    feedback:
      'Esha IT Consultancy stands out for its customer-focused approach. They listen, analyze, and deliver tailored solutions that align perfectly with business goals.',
  },
  {
    id: crypto.randomUUID(),
    name: 'Michael Johnson',
    position: 'CEO',
    feedback:
      'We’ve worked with multiple IT partners, but Esha IT Consultancy truly stands apart in terms of reliability and service quality. Highly recommended for growing businesses.',
  },
  {
    id: crypto.randomUUID(),
    name: 'Sneha Iyer',
    position: 'Project Lead',
    feedback:
      'Their team is knowledgeable, approachable, and always ready to support. Esha IT Consultancy helped us modernize our systems with minimal disruption.',
  },
  {
    id: crypto.randomUUID(),
    name: 'James Anderson',
    position: 'Director',
    feedback:
      'Choosing Esha IT Consultancy was one of the best decisions for our company. Their expertise in IT consulting and staffing helped us scale faster and smarter.',
  },
]

const Testimonial = () => {
  const slideControl = {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 4000,
      reverseDirection: false,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  }

  return (
    <>
      <div className="testimonial__one section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <div
                className="testimonial__one-left"
                style={{ backgroundImage: `url(${testimonialBg})` }}
              >
                <div className="testimonial__one-left-title">
                  <span className="subtitle-one">Client Testimonial</span>
                  <h2>
                    WebTech Solutions the{' '}
                    <span className="highlighted">transfor</span>{' '}
                  </h2>
                  <a href="/contact" className="btn-one">
                    Get Support
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="testimonial__one-right">
                <Swiper
                  modules={[EffectFade, Autoplay, Navigation]}
                  {...slideControl}
                >
                  {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id}>
                      <div className="single-slider">
                        <div className="single-slider-user">
                          <div className="single-slider-user-name">
                            <h4>{testimonial.name}</h4>
                            <span>{testimonial.position}</span>
                          </div>
                          <div className="single-slider-user-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star not-rated"></i>
                          </div>
                        </div>
                        <p>{testimonial.feedback}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                  {/* <SwiperSlide>
                    <div className="single-slider">
                      <div className="single-slider-user">
                        <div className="single-slider-user-name">
                          <h4>Nasir Al Shakib</h4>
                          <span>Content Creator</span>
                        </div>
                        <div className="single-slider-user-rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star not-rated"></i>
                        </div>
                      </div>
                      <p>
                        Their product exceeded his my ro expectations. The the
                        quality and attention to moutstandin an and it has
                        become an essential most a education the a man who can
                        do tant clearly
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="single-slider">
                      <div className="single-slider-user">
                        <div className="single-slider-user-name">
                          <h4>Devon Lane</h4>
                          <span>Marketing</span>
                        </div>
                        <div className="single-slider-user-rating">
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star"></i>
                          <i className="fas fa-star not-rated"></i>
                        </div>
                      </div>
                      <p>
                        Their product exceeded his my ro expectations. The the
                        quality and attention to moutstandin an and it has
                        become an essential most a education the a man who can
                        do tant clearly
                      </p>
                    </div>
                  </SwiperSlide> */}
                </Swiper>
                <div className="testimonial__one-right-bottom">
                  <div className="slider-arrow">
                    <i className="swiper-button-prev fas fa-arrow-left"></i>
                    <i className="swiper-button-next fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial
