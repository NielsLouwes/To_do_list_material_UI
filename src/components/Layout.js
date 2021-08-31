import React from "react";
import { makeStyles } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { Typography } from "@material-ui/core";

const drawerWidth = 240

const useStyles = makeStyles({
    page: {
        background: '#f9f9f9',
        width: '100%'
    },
    drawer: {
      width: drawerWidth
    }
});

export default function Layout({ children }) {
    const classes = useStyles()
    
  return (
    <div>
        {/* app bar */}

        {/* side drawer */}
        <Drawer
          className={classes.drawer}
          variant="permanent" 
          anchor="left"

                 >
          <div>
            <Typography>
              Ninja Notes
            </Typography>
          </div>
        </Drawer>


      <div className={classes.page}>{children}</div>
    </div>
  );
}

