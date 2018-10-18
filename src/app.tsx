import * as React from 'react';

import SideBar from './SideBar';
import MainContent from './MainContent'

const styling = {
  display: 'flex', 
  height:'100%', 
  alignItems: 'center', 
  padding: '10px',
}

type State = {
  results: any
}

export class App extends React.Component<undefined, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      results: []
    }
  }

  watDoIDo = async (query: string) => {
    // debugger
    //'https://newui.phx.connexta.com:8993/search/catalog/internal/cql
    const body = {"src":"ddf.distribution","start":1,"count":250,"cql":"(\"anyText\" ILIKE 'poop')","sort":"modified:descending","id":"ee1a0e65-a1fd-4550-a57a-388d0aaa0c7c"}
    const res = await window.fetch('https://newui.phx.connexta.com:8993/search/catalog/internal/cql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'wooTracker=tRtNxkKpUGmT; JSESSIONID=kn0nbkls72vz1mr422kdt37bw',
        'X-Requested-With': 'XMLHttpRequest',
      },
      body: JSON.stringify(body)
    })
    const json = res.json()
    console.log(json)
  }

  render() {
    return (
      <div className='main-container' style={styling}>
        <SideBar onSearch={this.watDoIDo} />
        <MainContent results={this.state.results} />
      </div>
    );
  }
}
