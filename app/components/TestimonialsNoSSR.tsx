import dynamic from 'next/dynamic'

export const TestimonialsNOSSR = dynamic(
  () => import('./Testimonials'),
  { 
    ssr: false,
    loading: () => <p>Carregando depoimentos...</p> // Opcional: adicione um loading state
  }
)