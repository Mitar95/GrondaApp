import {ICreatoin} from '../types/apiTypes';

const mockApiResponse = [
  {
    id: 1,
    category_id: 1,
    title: 'The Limit is The Sky',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/vf.JPEG',
  },
  {
    id: 2,
    category_id: 2,
    title: 'Avocado Cream',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/vf.JPEG',
  },
  {
    id: 3,
    category_id: 2,
    title: 'Sandwich',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/vf.JPEG',
  },
  {
    id: 4,
    category_id: 2,
    title: '',
    img_url:
      'https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/q2b.JPEG',
  },
  {
    id: 5,
    category_id: 1,
    title: 'Panificando',
    img_url:
      'https://d2bn8tb344j6vy.cloudfront.net/W6eu9RP1pc/stories/thumbnail_ik.png',
  },
  {
    id: 6,
    category_id: 3,
    title: '',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/An4jAVSUOQ/stories/qz.JPEG',
  },
  {
    id: 3,
    category_id: 2,
    title: 'Desayuno',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/4BHK6UC1U1/stories/8l.JPEG',
  },
];

const SAFE_MODE = true; // set to 'false' to simulate response error
const FAILING_RATE = 0.5; // 50%
const MAX_RESPONSE_TIMEOUT = 4000; // ms

const getCreations = async (): Promise<Array<ICreatoin>> => {
  return new Promise((resolve, rejcet) => {
    const isFaild = !SAFE_MODE && Math.random() < FAILING_RATE;

    if (isFaild) {
      rejcet('getCreations faild');
    } else {
      setTimeout(() => {
        resolve(mockApiResponse);
      }, Math.random() * MAX_RESPONSE_TIMEOUT);
    }
  });
};

export default getCreations;
