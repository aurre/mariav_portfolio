import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const PortfolioItems = (props) => {
    return (
          <Grid item xs={12} md={6} style={{padding: 0}}>
            <div style={{padding: 0}}>
              <List style={{padding: 0}}>
                  <ListItem>
                    <ListItemText
                      primary={props.props}
                    />
                  </ListItem>
              </List>
            </div>
          </Grid>
    )
}


export default PortfolioItems;