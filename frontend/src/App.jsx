import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='w-full h-[982px] font-outfit rounded-b-[120px]' style={{background: "url(https://s3-alpha-sig.figma.com/img/734f/2851/757355040aa84c8180bf8a118508ec5d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npYRNpCM8oDFwPRiO6l~FbN1zG1lEJbkoYyqEMMF-YQhLEPWCeA~ccnpkAhhEHsY~x8I6q1AGF8OC-G8d53tmvcNv-l20MlCF8xh8~t7WPoissIzuWVn-KSxkF~nkA0XsvQ3lm1UFBDROoSc~zTPqgaDxWakVc27toYzWDgypXn0XvnnWO4t8pb1QfONvpg9Ec0-mSkeTKaYvRdzFfpi10X-datkpYE5pFNeIz6sy-XMSQ19krLJIX-ACuU~lUhi1KwKXGIioxv40pMTTOvI8Oxkrh0vhlQVKv7hyRyJU43AUDYs1q--ySdsumolIBFpX8bxDdUBsoWjK4WBFeb9wQ__)"}}>
      <Navbar/>
      <Home/>
    </div>
  )
}

export default App
