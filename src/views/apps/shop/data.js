import s1 from '../../../assets/images/products/s1.png';
import s2 from '../../../assets/images/products/s2.jpg';
import s3 from '../../../assets/images/products/s3.png';
import s4 from '../../../assets/images/products/s4.jpg';
import s5 from '../../../assets/images/products/s5.jpg';
import s6 from '../../../assets/images/products/s6.png';
import s7 from '../../../assets/images/products/s7.png';
import s8 from '../../../assets/images/products/s8.png';
 
 

const Shopitems = [
  {
    title: 'KARMA: Politics at Play ',
    // category: 'Ice-cream shop',
    price: '$12',
    colors: [(theme) => theme.palette.secondary.main, (theme) => theme.palette.primary.main],
    photo: s1,
    id: 1,
    star: [1, 2, 3, 4, 5],
  },
  {
    title: 'MISTER PIGSTER',
    // category: 'Vegitables shop',
    price: '$30',
    colors: [(theme) => theme.palette.success.main, (theme) => theme.palette.secondary.main],
    photo: s2,
    id: 2,
    star: [1, 2, 3, 4],
  },
  {
    title: 'HANUMAN - THE LORD OF LITTLE WONDER',
    // category: 'Toy shop',
    price: '$10',
    colors: [(theme) => theme.palette.primary.main, (theme) => theme.palette.secondary.main],
    photo: s3,
    id: 3,
    star: [1, 2, 3],
  },
  {
    title: 'MAHABHARATH',
    // category: 'AtoZ shop',
    price: '$250',
    colors: [(theme) => theme.palette.error.main, (theme) => theme.palette.warning.main],
    photo: s4,
    id: 4,
    star: [1, 2, 3, 4, 5],
  },
  {
    title: 'Poems',
    // category: 'Ice-cream shop',
    price: '$50',
    colors: [(theme) => theme.palette.secondary.main, (theme) => theme.palette.primary.main],
    photo: s5,
    id: 5,
    star: [1, 2, 3, 4, 5],
  },
  {
    title: 'SAROJAS BREATH',
    // category: 'Ice-cream shop',
    price: '$25',
    colors: [(theme) => theme.palette.success.main, (theme) => theme.palette.secondary.main],
    photo: s6,
    id: 6,
    star: [1, 2, 3, 4, 5],
  },
  {
    title: 'CHAOS AND CONSEQUENCES',
    // category: 'Ice-cream shop',
    price: '$15',
    colors: [(theme) => theme.palette.primary.main, (theme) => theme.palette.secondary.main],
    photo: s7,
    id: 7,
    star: [1, 2, 3, 4, 5],
  },
  {
    title: 'CHILDHOOD LOST',
    // category: 'Boat Headphones',
    price: '$300',
    colors: [(theme) => theme.palette.error.main, (theme) => theme.palette.warning.main],
    photo: s8,
    id: 8,
    star: [1, 2, 3, 4, 5],
  },
   
   
   
  
];

export default Shopitems;
