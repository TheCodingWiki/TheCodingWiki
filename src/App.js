import Navbar from "../src/Components/Navbar"
import "./Style/App.css"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: "none",
  color: theme.palette.text.secondary,
  backgroundColor: "#070f43",
}));

function App() {

  return (
    <html>   
      <div>
      <Navbar/>
      {/* <-------Header div -------> */}
      <div className="header">
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid item xs={6} >
          <div>
          <Item sx={{ml: 35}}><h1 className="headertext"><u>TheCodingWiki</u>  For all devs</h1></Item>
          </div>
        </Grid>
        <Grid item xs={6} >
          <div>
          <Item sx={{mr: 35}}><img className="headerimg" src="https://i.postimg.cc/ZqX51Dpv/3-Wy-W-unscreen.gif"/></Item>
          </div>
        </Grid>
      </Grid>
      <hr className="headerhr"/>
    </div>
     {/* <-------Main div -------> */}
     <div className="boxgrid">
    </div>
    </div>
    </html>
  );
}

export default App;
