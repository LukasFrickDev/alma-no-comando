import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../app/store'
import { setActiveSection } from '../../redux/slices/uiSlice'
import HeroSection from '../../components/sections/Hero'
import ProblemSection from '../../components/sections/Problem'
import MethodIntroSection from '../../components/sections/MethodIntro'
import PillarsSection from '../../components/sections/Pillars'
import DepthPathsSection from '../../components/sections/DepthPaths'
import BookSection from '../../components/sections/Book'
import AuthorSection from '../../components/sections/Author'
import ManifestoSection from '../../components/sections/Manifesto'
import FooterSection from '../../components/sections/Footer'

const Home = () => {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(setActiveSection('home'))
  }, [dispatch])

  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <MethodIntroSection />
      <PillarsSection />
      <DepthPathsSection />
      <BookSection />
      <AuthorSection />
      <ManifestoSection />
      <FooterSection />
    </main>
  )
}

export default Home
