import { rest } from 'msw';

export const handlers = [
  rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'Chocolate', imagePath: '/images/chocolate.png'},
        {name: 'Vanilla', imagePath: '/images/vanilla.png'},
      ])
    )
  }),

  rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
    return res(
      ctx.json([
        { name: 'M&Ms', imagePath: '/images/mms.png'},
        { name: 'Badam', imagePath: '/images/badam.png'},
        { name: 'Hot Chocolate Fudge', imagePath: '/images/hotChocolateFudge.png'},
      ])
    )
  })
]