import {render, screen} from '@testing-library/react';

import Options from '../Options';

test('displays image for each scoop option', async () => {
  render(<Options optionType="scoops" />);

  // find images
  const scoopImages = await screen.findAllByRole('img', {name: /scoop$/i});
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual([ 'Chocolate scoop', 'Vanilla scoop'])
});

test('displays images for each topping option', async () => {
  render(<Options optionType='toppings' />);

  // find images
  const toppingsImages = await screen.findAllByRole('img', {name: /topping/i});
  expect(toppingsImages).toHaveLength(3);

  // confirm alt text of images
  const altText = toppingsImages.map((element) => element.alt);
  expect(altText).toEqual([ 'M&Ms topping', 'Badam topping', 'Hot Chocolate Fudge topping']);
})

