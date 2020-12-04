import React from 'react'
import Typography from "@material-ui/core/Typography";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Grid from "@material-ui/core/Grid";
import { Link } from 'react-router-dom';
import useStyles from  "./styles";




export type Child = {
  title: string;
  subchilds: any[];
}

export interface data {
  id: string;
  title: string;
  type: string;
  children?:  string [];
  drawerChildren?: Child[];
}

interface SidebarLinkProps {
  sidebarData: data[] | undefined; 
}

const SidebarLink: React.FC<SidebarLinkProps> = (props) => {
  const classes = useStyles();
    let content = props.sidebarData && props.sidebarData.map(data => {
        if(data.type === 'simple') {
           return (
             <Grid key={data.id} className={classes.container}>
               <Grid xs={12} className={classes.title}>
                 <Typography variant="h2" component="h3">
                   {data.title}
                 </Typography>
               </Grid>
               {data.children && data.children.map((child) => {
                 return (
                   <Grid className={classes.item} xs={12}>
                     <Link to={'/'} className={classes.itemLink}>{child}</Link>
                   </Grid>
                 );
               })}
             </Grid>
           );   
        } else if (data.type === 'drawer') {
            return (
              <Grid className={classes.container}>
                <Grid xs={12} className={classes.title}>
                  <Typography variant="h2" component="h3">
                    {data.title}
                  </Typography>
                </Grid>
                {data.drawerChildren && data.drawerChildren.map((child) => {
                  return (
                    <Accordion className={classes.AccordionContainer}>
                      <AccordionSummary
                        aria-label="Expand"
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header"
                      >
                        <Grid className={classes.item} xs={12}>
                          + {child.title}
                        </Grid>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography color="textSecondary">
                          <ul className={classes.AccordionListItems}>
                            {child.subchilds && child.subchilds.map((subchild) => {
                              return (
                                <Link to={'/'} className={classes.itemLink}>
                                  <li>{subchild}</li>
                                </Link>
                              );
                            })}
                          </ul>
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </Grid>
            );
        }
    });
    
    return (
        <div>
          {content}  
        </div>
    );
};

export default SidebarLink;








   