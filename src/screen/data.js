import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function Data() {
  let [data, setData] = useState([]);
  let Navigate = useNavigate()
  let Dataget = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2022-10-17&sortBy=popularity&apiKey=611e1230d6cf4d8f9bde91597fbcc4c2"
      )
      .then((succ) => {
        setData(succ.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    Dataget();
  }, []);
  let Detail = (e) => {
    Navigate("/details",{
        state:{
            item:{e},
        },
    })
  };
  let location = useLocation();
console.log(location.state)
  return (
    <div>
      <header className="App-header">
        <Box sx={{ p: 5 }}>
          <Typography
            variant="h3"
            align="center"
            sx={{ p: 3, color: "brown" }}
          >
            Breaking News
          </Typography>
          <Box sx={{ p: 6 }}>
            <Grid container rowSpacing={3}>
              {data.map((e,i) => (
                <Grid key={i} item md={3} onClick={() => Detail(e)} >
                  <Box
                    sx={{
                      border: "3px solid darkblue",
                      p: 2,
                      width: "75%",
                      height: "80%",
                      cursor:"pointer"
                    }}
                  >
                    <Typography>{e.title}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </header>
    </div>
  );
}
export default Data;