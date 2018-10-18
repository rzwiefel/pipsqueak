import * as React from 'react';

const styling = {
  height: '100%',
  flex: '66%',
  order: 1,
  padding: '10px',
  backgroundColor: 'white',
  margin: '20px 20px',
  border: "2px solid #EBEBEB"
}

class MainContent extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {value: [0, 1, 2, 3, 4]};
  }


  render() {
    return (
      <div style={{height: '100%', flex: '66%',}}>
      <div style={styling}>
      
        <div>
        <h1>Metacard 1</h1>
        <h3>Phoenix, AZ</h3>
        <p>lkjsdl;fkjks dljsdflkjs flksjdfl sdflkjsldf lskdfj lsdkf lskdjflskd fjksdfj klsdjf lksdj flksdj flksdj flksd flksdjflksdjflskdj flsdkf jlksdjf lskdj flksdj</p>
        </div>
      </div>
      </div>
    );
  }
}

export default MainContent;
