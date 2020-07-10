const aws = require('aws-sdk');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

module.exports = (config) => {
  const s3 = new aws.S3(config.aws);

  const upload = multer({
    storage: multer.diskStorage({
      filename: function(req, { originalname, fieldname }, done) {
        const extension = path.extname(originalname);
        done(null, `${Date.now().toString()}_${fieldname}${extension}`);
      },
    }),
  });

  const uploadMiddleware = upload.fields([
    {
      name: 'square',
      maxCount: 1,
    },
    {
      name: 'portrait',
      maxCount: 1,
    },
  ]);

  const readFileAndUpload = (filePath) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, (error, fileContent) => {
        if (error) reject(error);
        const extension = path
          .extname(filePath)
          .split('.')
          .pop();
        params = {
          ContentType: `image/${extension}`,
          Key: path.basename(filePath),
        };
        resolve(doFileUpload(fileContent, params));
      });
    });
  };

  /**
   * Upload to s3
   * @param {*} Body File contents
   * @param {*} params AWS S3 upload params
   */
  const doFileUpload = (Body, params) => {
    return new Promise((resolve, reject) => {
      s3.upload(
        {
          Body,
          Bucket: config.aws.bucket,
          ACL: 'public-read',
          ContentDisposition: 'attachment',
          ...params,
        },
        (error, { Location }) => {
          if (error) return reject(error);
          return resolve(Location);
        },
      );
    });
  };

  /**
   * Upload image files to s3
   * @param {*} data Path or object {buffer, filename, contentType}
   */
  const uploadToS3 = async (data) => {
    const uploads = [];
    data.forEach((datum) => {
      if (typeof datum === 'object') {
        const { buffer } = datum;
        const params = {
          ContentType: datum.contentType || 'image/jpg',
          Key: datum.filename,
        };
        uploads.push(doFileUpload(buffer, params));
      } else {
        // filepath
        uploads.push(readFileAndUpload(datum));
      }
    });
    // TODO: unlink temp files
    return await Promise.all(uploads);
  };

  return {
    uploadMiddleware,
    uploadToS3,
  };
};
