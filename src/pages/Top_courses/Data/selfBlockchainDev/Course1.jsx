import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function Course1() {

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const Data=[
    {
        id:1,
        name:'Akila',
        description:'aki',
    },
    {
        id:1,
        name:'Akila',
        description:'aki',
    },
    {
        id:1,
        name:'Akila',
        description:'aki',
    },
  ]

  

  return (
    <Stack spacing={2}>
      <Typography>
        <div>
            {page.map((e)=>{return(
                <li>
                    {e.name}
                </li>)
            })}
        </div>
      </Typography>
      <Typography>
        <div>
            {page.map((e)=>{return(
                <li>
                    {e.name}
                </li>)
            })}
        </div>
      </Typography>
      <Typography>
        <div>
            {page.map((e)=>{return(
                <li>
                    {e.name}
                </li>)
            })}
        </div>
      </Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </Stack>
  );
}