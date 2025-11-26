import { compareImages } from '../utils/imageComparer.js';

const img1 = 'imageComparison/images/Image1.jpg';
const img2 = 'imageComparison/images/Image2.jpg';
const diff = 'imageComparison/output/diff.jpg';

await compareImages(img1, img2, diff);
