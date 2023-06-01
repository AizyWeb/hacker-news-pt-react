import './App.css'
import { lazy, Suspense } from 'react'
import { Header } from './components/Header'
import { Route } from 'wouter'

const TopStories = lazy(() => import('./pages/TopStories'))
const Detail = lazy(() => import('./pages/Detail'))


export default function App () {
  return (
    <>
      <Header />

      <main>
        <Suspense fallback='Loading...'>
          <Route path='/' component={TopStories} />
          <Route path='/article/:id' component={Detail} />
        </Suspense>
      </main>
    </>
  )
}
