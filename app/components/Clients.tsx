'use client'

import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Clients = () => {
  const testimonials = [
    { id: 1, name: "Noura S.", role: "Client", company: "Tech Startup", rating: 5, text: "صنع لنا موقع رائع وبمواصفات عالية وفي وقت قياسي. أحمد محترف حقيقي ويفهم متطلبات العميل بسرعة. أنصح بالتعامل معه بشدة." },
    { id: 2, name: "Ahmed E.", role: "Client", company: "Digital Agency", rating: 5, text: "تعاملت مع أحمد في عدة مشاريع وكان دائماً يسلم العمل في الوقت المحدد وبجودة ممتازة. له خبرة واسعة في التقنيات الحديثة." },
    { id: 3, name: "Anas Z.", role: "Client", company: "Freelance Project", rating: 5, text: "أفضل مطور تعاملت معه. فهم المشروع بسرعة وطور حلول إبداعية للتحديات التقنية. التواصل معه سهل وواضح طوال فترة المشروع." },
    { id: 4, name: "Sarah M.", role: "Client", company: "Online Store", rating: 5, text: "Excellent work! Ahmed delivered exactly what we needed for our online store. Professional, responsive, and great attention to detail." },
    { id: 5, name: "Omar K.", role: "Client", company: "Portfolio Website", rating: 5, text: "مطور محترف جداً وسريع في التنفيذ. عمل لي موقع شخصي رائع وساعدني في تحسين هويتي الرقمية. شكراً أحمد!" }
  ]

  const pageSize = 3
  const totalPages = Math.ceil(testimonials.length / pageSize)
  const [currentPage, setCurrentPage] = useState(0)

  const visibleTestimonials = useMemo(() => {
    const start = currentPage * pageSize
    return testimonials.slice(start, start + pageSize)
  }, [currentPage, testimonials])

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages)
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)

  return (
    <section id="clients" className="border-b border-neutral-900 pb-24">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-purple-400">Testimonials</p>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            What <span className="text-purple-400">Clients Say</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-neutral-400">
            أراء حقيقية من عملاء تعاونت معهم في مشاريع مختلفة بداية من المواقع البسيطة وحتى الحلول المتكاملة.
          </p>
        </div>

        <div className="flex items-center gap-3 self-end md:self-auto">
          <button
            aria-label="Previous testimonials"
            onClick={prevPage}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-500 text-purple-300 transition hover:bg-purple-500 hover:text-white"
          >
            <FaChevronLeft />
          </button>
          <button
            aria-label="Next testimonials"
            onClick={nextPage}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-500 text-purple-300 transition hover:bg-purple-500 hover:text-white"
          >
            <FaChevronRight />
          </button>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.6 }}
        className="grid gap-6 md:grid-cols-3"
      >
        {visibleTestimonials.map((testimonial) => (
          <motion.article
            key={testimonial.id}
            whileHover={{ y: -6 }}
            className="flex h-full flex-col rounded-xl border border-purple-500/40 bg-gradient-to-b from-neutral-900 to-neutral-900/60 p-6 shadow-[0_10px_30px_rgba(168,85,247,0.15)]"
          >
            <div className="flex items-center justify-between text-yellow-400">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, idx) => (
                  <FaStar key={idx} />
                ))}
              </div>
              <span className="text-xs text-neutral-500">5.0</span>
            </div>

            <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-200">
              {testimonial.text}
            </p>

            <div className="mt-6 flex items-center gap-3 border-t border-neutral-800 pt-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-purple-500/60 bg-neutral-900 text-lg font-semibold text-white">
                {testimonial.name.split(' ')[0].charAt(0)}{testimonial.name.split(' ')[1]?.charAt(0) ?? ''}
              </div>
              <div>
                <p className="text-sm font-semibold text-purple-300">{testimonial.name}</p>
                <p className="text-xs text-neutral-400">{testimonial.role}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      <div className="mt-8 flex justify-center gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentPage
                ? 'w-8 bg-purple-500'
                : 'w-3 bg-neutral-700 hover:bg-neutral-500'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Clients