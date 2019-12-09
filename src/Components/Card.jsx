import React from 'react';
import {
      Card,
      CardPrimaryAction,
      CardMedia,
} from '@rmwc/card';
import { Typography } from '@rmwc/typography';

import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@material/typography/dist/mdc.typography.css';

const SingleCard = () =>  (
      <div>
            <Card style={{ width: '21rem' }}>
            <CardPrimaryAction>
            <CardMedia
                  square
                  style={{
                        backgroundImage: 'url(images/avatar.png)'
                      }}
             />
            <Typography use="headline6" tag="h2">
            Our Changing Planet
            </Typography>
            <Typography
            use="body1"
            tag="div"
            theme="textSecondaryOnBackground"
            >
            e-mail:
            phone:
            street:
            etc
            </Typography>
      </CardPrimaryAction>
      </Card> 
      </div>
        
 );

export default SingleCard;
