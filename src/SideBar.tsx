import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styling = {
  height: '100%',
  width: '160px',
  flex: '33%',
  backgroundColor: 'rgba(224, 224, 224, 0.988)',
  order: 0,
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',

}

type State = {
  query: string
}

type Props = {
  onSearch: (query: string) => void
}

class SideBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {query: ''};
  }

  handleClick = () => {
    console.log("calling clickhandler with state: " + JSON.stringify(this.state));

    this.props.onSearch(this.state.query);
  }

  handleChange = (event: any) => {
    this.setState({query: event.target.value});
  }

  render() {
    return (
      <div style={styling}>

          <TextField label="Search/Query" type="text" name="search" onChange={this.handleChange}/>
          <div style={{height: 20}} />
          <Button name="execute" onClick={this.handleClick} variant="contained" color="primary">Search!</Button>

      </div>
    );
  }
}

export default SideBar;
