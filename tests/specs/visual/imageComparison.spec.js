import { test, expect } from '@playwright/test';
import { compareImages } from '../../../utils/imageComparer';

const img1 = 'data/images/Image1.jpg';
const img2 = 'data/images/Image2.jpg';
const diff = 'output/diff.jpg';

test.describe('Image comparison', () => {
  test('Comparing two images to get diff', async () => {
    const result = await compareImages(img1, img2, diff);
    expect(result.misMatchPercentage).toBeGreaterThan(2);
  });
});
