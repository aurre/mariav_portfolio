import React from 'react';
import List from '@material-ui/core/List';


const SocialMedia = () => {
  return (
    <List>
      <a href='https://www.facebook.com/maria.perezrios.37'>
        <img style={{ height: '30px' }} src="https://png.icons8.com/material/50/000000/facebook.png" />
      </a>
      <a href='https://www.youtube.com/results?search_query=maria+victoria+perez+rios'><img style={{ height: '40px' }} src="https://png.icons8.com/color/50/000000/youtube.png" />
      </a>
      <a href='#twitter'>
        <img style={{ height: '40px' }} src="https://png.icons8.com/color/50/000000/twitter.png" />
      </a>
      <a href="https://www.linkedin.com/in/maria-victoria-perez-rios-30b38424/">
        <img style={{ height: '40px' }} src="https://png.icons8.com/color/50/000000/linkedin.png" />
      </a>
    </List>
  )
}

export default SocialMedia
