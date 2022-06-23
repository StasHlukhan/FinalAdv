import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'

import './App.scss';
import './main.scss';
import Header from './components//header/header';
import Hero from './components/hero/hero';
import Idol from './components/idol/idol';
import Footer from './components/footer/footer';
import About from './components/About/About';
import Map from './components/map/Map';
import Title from './components/title/title';
import Partners from './components/partners/partners';
import { GetMaps } from './axios/map';

function App() {
  const [Maps,SetMaps] = useState<IMap[]>([])
  const [IsLoading,SetLoading] = useState(true)
  useEffect(()=>{
    GetMaps().then((answer)=>{
      SetMaps(answer.data)
    }).finally(()=>{
      SetLoading(false)
    })
  },[])

  if (IsLoading) 
  return(
    <div>Loading...</div>
  )
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        
        <section className="home">
          <Header/>
          <Hero/>
        </section>
        <Title></Title>
        <section className="idol">
          <Idol Maps={Maps}/>
        </section>
        <Partners></Partners>
        <Footer></Footer>
      </Route>
      <Route path={'/About/:MapID'}>
        <About></About>
        
      </Route>
      <Route path={'/Map/:MapID/:Team'}> 
        <Map Maps={Maps}></Map>
      </Route>
    </Switch>
  </BrowserRouter>

  )
}

export default App;
