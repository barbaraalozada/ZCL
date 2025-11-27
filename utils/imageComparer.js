import resemble from 'resemblejs';
import fs from 'fs-extra';
import path from 'path';

export async function compareImages (imagePath1, imagePath2, diffOutputPath) {
  try {
    if (!(await fs.pathExists(imagePath1))) {
      throw new Error(`The image does not exist: ${imagePath1}`);
    }
    if (!(await fs.pathExists(imagePath2))) {
      throw new Error(`The image does not exist: ${imagePath2}`);
    }
    const folder = path.dirname(diffOutputPath);
    fs.ensureDirSync(folder);

    return new Promise((resolve, reject) => {
      resemble(imagePath1).
        compareTo(imagePath2).
        onComplete(async function (data) {
          try {
            console.log(data);
            const diffBuffer = data.getBuffer();
            await fs.writeFile(diffOutputPath, diffBuffer);
            resolve({
              isSameDimensions: data.isSameDimensions,
              misMatchPercentage: Number(data.misMatchPercentage),
              diffBounds: data.diffBounds,
              analysisTime: data.analysisTime
            });
          } catch (err) {
            reject(err);
          }
        });
    });
  } catch (err) {
    console.error('Image comparison error:', err.message);
  }

}
